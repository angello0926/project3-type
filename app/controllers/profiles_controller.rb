class ProfilesController < ApplicationController
  def profile
    @user = User.first.user_conversation_relationships
    @recipient = User.first.recipients
    render json: {user: @user, recipients: @recipient}
  end

  def currentuserprofile
    query = "users.id = ?"
     @user = User.joins(:mbti, :horoscope, :numerology).includes(:mbti, :horoscope, :numerology).where(query, current_user.id)
     render json: {user: @user}

  end
end
