class ProfilesController < ApplicationController
  def conversation
    @user = User.find(current_user.id).user_conversation_relationships
    render json: {user: @user}
  end

  def profile

     @mbti = Mbti.find(current_user.mbti_id).name
     @horoscope = Horoscope.find(current_user.horoscope_id).name
     @numerology = Numerology.find(current_user.numerology_id).name
     render json: {mbti: @mbti , horoscope: @horoscope , numerology: @numerology}

  end
end
