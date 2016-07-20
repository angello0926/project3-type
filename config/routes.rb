Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'personalities', to: 'personalities#personality'
  get '/secret', to: 'statics#secret'
  root 'statics#home'

  resources :conversations do
    resources :messages
  end
end
