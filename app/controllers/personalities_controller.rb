class PersonalitiesController < ApplicationController
  def personality
   @mbti = Mbti.all
   @horoscope = Horoscope.all
   @numerology = Numerology.all
   render json: {mbti: @mbti, horoscope: @horoscope, numerology: @numerology}
  end

  def search
    query = "mbtis.name = ? OR horoscopes.name = ? OR numerologies.name = ?"
    @users = User.joins(:mbti, :horoscope, :numerology).includes(:mbti, :horoscope, :numerology).where(query, params[:mbti], params[:zodiac], params[:numerology])
  end
end

