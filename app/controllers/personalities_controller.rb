class PersonalitiesController < ApplicationController
  def personality
   @mbti = Mbti.all
   @horoscope = Horoscope.all
   @numerology = Numerology.all
   render json: {mbti: @mbti, horoscope: @horoscope, numerology: @numerology}
  end

  def search
    @zodiac =Horoscope.where("name=?", params[:zodiac]).first
    @numerology =Numerology.where("name=?", params[:numerology]).first
    @mbti = Mbti.where("name=?", params[:mbti]).first
    @users=User.where("mbti_id = ? OR horoscope_id = ? OR numerology_id=? ",@mbti.id.to_s,@zodiac.id.to_s,@numerology.id.to_s)


    render json: { users: @users }
  end
end
