class PersonalitiesController < ApplicationController
  def personality
   @mbti = Mbti.all
   @horoscope = Horoscope.all
   @numerology = Numerology.all
   render json: {mbti: @mbti, horoscope: @horoscope, numerology: @numerology}
  end
end
