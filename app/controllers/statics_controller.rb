class StaticsController < ApplicationController
before_action :authenticate_user! , only: [:secret]

  def home

  end

  def secret
      @users = User.where.not("id = ?",current_user.id).order("created_at DESC")
      @conversations = Conversation.involving(current_user).order("created_at DESC")
  end


end
