Rails.application.routes.draw do
  resources :comments
  resources :archive_articles
  resources :users

  # Authentication Routes
  post '/signup', to: 'users#create'

  # Article Routes
  get 'user_archives', to: 'archive_articles#user_archives'

  # Comment Routes
  get 'article_comments', to: 'comments#article_comments'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
