class ProfilesController < ApplicationController
  def conversation
    @user = User.first.user_conversation_relationships
    @recipient = User.first.recipients
    render json: {user: @user, recipients: @recipient}
  end

  def profile
    query = "users.id = ?"
     @mbti = Mbti.find(current_user.mbti_id).name
     render json: {mbti: @mbti}

  end
end
