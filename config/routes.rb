Rails.application.routes.draw do
  resources :archive_articles
  resources :users

  # Authentication Routes
  post '/signup', to: 'users#create'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
