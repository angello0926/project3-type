class UsersController < ApplicationController

  def index
  end


  def update
    @user.assign_attributes(user_params)
    if @user.save

    else
      render json: @user.errors.messages, status: 400
    end
  end

    ​
​
private
​
   def set_users
    @users = users.find_by_id(params[:id])
    if @users.nil?
      render json: {message: "Cannot find users with ID #{params[:id]}"}
    end
   end


  def user_params
    params.require(:users).permit(:birth_mm, :birth_dd, :birth_yy, :gender)
  end
end

end
