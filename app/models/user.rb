class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

belongs_to :numerology
belongs_to :mbti
belongs_to :horoscope
has_many :messages
has_many :chatrooms, through: :messages

end
