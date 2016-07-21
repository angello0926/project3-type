class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session

  before_action :configure_permitted_params, if: :devise_controller?
  before_action :get_current_user

  def authenticate_user!
    render json: {message: "Unauthorize"}, status: 401 if current_user.nil?
  end

  def get_current_user
    return nil unless cookies[:authHeaders]
    auth_headers = JSON.parse cookies[:authHeaders]

    expiration_datetime = DateTime.strptime(auth_headers["expiry"], "%s")
    current_user = User.find_by(uid: auth_headers["uid"])

    if current_user &&
       current_user.tokens.has_key?(auth_headers["client"]) &&
       expiration_datetime > DateTime.now

      @current_user = current_user
    end
    @current_user
  end

  protected

  def configure_permitted_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:birth_mm, :birth_dd, :birth_yy, :gender, :name, :horoscope_id, :numerology_id,:imgURL])
  end
end
