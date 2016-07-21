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

# => "ENFP"
# [10] pry(main)> Numerology.find(7).name
#   Numerology Load (0.3ms)  SELECT  "numerologies".* FROM "numerologies" WHERE "numerologies"."id" = $1 LIMIT 1  [["id", 7]]
# => "7"
# [11] pry(main)> Horoscope.find(7).name
#   Horoscope Load (0.3ms)  SELECT  "horoscopes".* FROM "horoscopes" WHERE "horoscopes"."id" = $1 LIMIT 1  [["id", 7]]
# => "Pisces"