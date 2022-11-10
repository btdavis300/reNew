Rails.application.routes.draw do
  resources :users

  # Authentication Routes
  # post '/signup', to: 'users#create'
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  # get "/logged_in", to: "sessions#logged_in"
  # get '/me', to: "users#show"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
