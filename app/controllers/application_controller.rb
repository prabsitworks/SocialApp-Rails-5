class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :is_admin

  private
  # Check whether user is admin or not
  def is_admin
    @current_user_admin = User.where(id: current_user.id).first.admin if !current_user.nil?
  end

  ## Return Error Response
  def return_error(code, status, message, data = {})
    render json: {
        code: code,
        status: status,
        message: message,
        data: data
    }, status: code
  end
end