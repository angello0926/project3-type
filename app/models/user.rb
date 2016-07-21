class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

belongs_to :numerology
belongs_to :mbti
belongs_to :horoscope

has_many :conversations, foreign_key: :sender_id
has_many :recipients, through: :conversations

has_many :inverse_conversations, foreign_key: :recipient_id, class_name: "Conversation"
has_many :initiators, through: :inverse_conversations, source: :recipient

after_create :create_default_conversation

  # for demo purposes

  def create_default_conversation
    Conversation.create(sender_id: 1, recipient_id: self.id) unless self.id == 1
  end

  def user_conversation_relationships
    user_ids = Conversation.where("sender_id = #{self.id} OR recipient_id = #{self.id}").pluck(:sender_id, :recipient_id).flatten.uniq
    users = User.where(id: user_ids)
  end
end
