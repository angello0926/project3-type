class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

belongs_to :numerology
belongs_to :mbti
belongs_to :horoscope

has_many :conversations, :foreign_key => :sender_id

after_create :create_default_conversation

  # for demo purposes

  def create_default_conversation
    Conversation.create(sender_id: 1, recipient_id: self.id) unless self.id == 1
  end


end
