class StaticsController < ApplicationController
before_action :authenticate_user! , only: [:secret]

  def home


  end


  end

  def secret
    query = "mbtis.name = ? OR horoscopes.name = ? OR numerologies.name = ?"
    @users = User.joins(:mbti, :horoscope, :numerology).includes(:mbti, :horoscope, :numerology).where(query, params[:mbti], params[:zodiac], params[:numerology])
     @conversations = Conversation.involving(current_user).order("created_at DESC")
  end
end
