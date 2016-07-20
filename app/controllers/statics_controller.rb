class StaticsController < ApplicationController
before_action :authenticate_user! , only: [:secret]

  def index
    @messages = Message.all
  end

  def create
    @message = Message.create!(params[:message])
  end

end
