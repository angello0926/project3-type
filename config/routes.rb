Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get '/signup' ,to: 'auth#signup'
  get '/login' ,to: 'auth#login'
  get '/secret', to: 'statics#secret'

  root 'statics#home'

end
