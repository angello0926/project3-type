Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get '/personalities', to: 'personalities#personality'
  get '/search', to: 'personalities#search'

  get '/secret', to: 'statics#secret'
  root 'statics#home'

end
