class TodosController < ApplicationController
  # GET /todos
  def index
    load_todos
  end

  # POST /todos
  def create
    Todo.belonging_to(session_user).create(todo_params)
    load_and_render_index
  end

  # PATCH/PUT /todos/1
  def update
    # cheat - sometimes the blur event handler asks to update an already destroyed record.
    Todo.belonging_to(session_user).where(id: params[:id]).update_all(todo_params.to_h)
    load_and_render_index
  end

  def update_many
    Todo.belonging_to(session_user).where(id: params[:ids]).update_all(todo_params.to_h)
    load_and_render_index
  end

  # DELETE /todos/1
  def destroy
    # same problem as on update - sometimes we try to destroy twice in the JS
    Todo.belonging_to(session_user).find_by(id: params[:id]).try(:destroy)
    load_and_render_index
  end

  def destroy_many
    Todo.belonging_to(session_user).where(id: params[:ids]).try(:destroy_all)
    load_and_render_index
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      params.require(:todo).permit(:title, :is_completed)
    end

    def filtering_params
      params.slice(:completed).to_unsafe_h
    end
    helper_method :filtering_params

    def load_and_render_index
      load_todos
      render :index, change: "todos"
    end

    def load_todos
      @todos = Todo.belonging_to(session_user).order(created_at: :asc)

      filtering_params.each do |key, value|
        @todos = @todos.public_send(key, value) if value.present?
      end
    end
end
