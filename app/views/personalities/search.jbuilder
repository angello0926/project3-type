json.array! @users do |user|
  json.merge! user.attributes
  json.mbti user.mbti.name
  json.horoscope user.horoscope.name
  json.numerology user.numerology.name
end