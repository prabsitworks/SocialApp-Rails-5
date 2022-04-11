class AdminController < ApplicationController

  def index
    @users = User.all

  end

  def disable
    @userid = User.where(id: params[:id]).first
    @userid.update(disableyn: 'Y') 
    respond_to do |format|
      format.html { redirect_to admin_path, notice: 'User is disabled' }
      format.json { head :no_content }
    end
  end

  

end
