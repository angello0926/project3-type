Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get '/personalities', to: 'personalities#personality'
  get '/search', to: 'personalities#search'
  get '/profile', to: 'profiles#profile'
  get '/secret', to: 'statics#secret'
  get '/showconversation', to: 'profiles#conversation'
  root 'statics#home'

    resources :conversations do
      resources :messages
    end
end
