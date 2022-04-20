Rails.application.routes.draw do
  # Index route of the application
  root 'welcome#index'

  # Admin default route 
  get 'admin', to:'admin#index'
  get 'fetch_users', to: 'admin#fetch_users'

  # Disable route of the user by admin
  # get 'disable', to:'admin#disable'
  # Added to disable by ID when rendering users list through datatable
  get '/disable/:id', to: 'admin#disable', as: :disable

  # Callback routes after omniauth authentication
  devise_for :users, :controllers => { omniauth_callbacks: "users/omniauth_callbacks", registrations: 'users/registrations' }
end
