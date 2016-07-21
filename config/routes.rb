Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  mount ActionCable.server => '/cable'
  get '/personalities', to: 'personalities#personality'
  get '/search', to: 'personalities#search'
  get '/messages' ,to: 'messages#create'
  get '/secret', to: 'statics#secret'
  root 'statics#home'

  resources :chatrooms, param: :slug
  resources :messages



end