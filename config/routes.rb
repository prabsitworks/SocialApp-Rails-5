Rails.application.routes.draw do
  # Index route of the application
  root 'welcome#index'

  # Admin default route 
  get 'admin', to:'admin#index'

  # Disable route of the user by admin
  post 'disable', to:'admin#disable'

  # Callback routes after omniauth authentication
  devise_for :users, :controllers => { omniauth_callbacks: "users/omniauth_callbacks", registrations: 'users/registrations' }
end
