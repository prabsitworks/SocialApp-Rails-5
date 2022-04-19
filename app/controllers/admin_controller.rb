class AdminController < ApplicationController
  # Home page for admin user with all the users
  def index
    @users = User.all
  end

  # Disable user from the admin 
  def disable
    @userid = User.where(id: params[:id]).first
    @userid.update(disableyn: 'Y') 
    respond_to do |format|
      format.html { redirect_to admin_path, notice: 'User is disabled' }
      format.json { head :no_content }
    end
  end

  # Fetch users from db based on page number
  def fetch_users
    
  end
end
