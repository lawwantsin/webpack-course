class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def session_user
    @session_user ||= session[:user_id] || generate_session_user_id
  end

  def generate_session_user_id
    session[:user_id] = SecureRandom.hex
  end
end
