class AddSessionUserToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :session_user_id, :string
  end
end
