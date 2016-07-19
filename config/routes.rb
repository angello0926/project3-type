Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :users
  get '/secret', to: 'statics#secret'
  root 'statics#home'

end
