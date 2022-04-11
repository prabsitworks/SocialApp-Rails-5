Rails.application.routes.draw do
  
  get 'admin', to:'admin#index'
  post 'disable', to:'admin#disable'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# config/routes.rb

  devise_for :users, :controllers => { omniauth_callbacks: "users/omniauth_callbacks", registrations: 'users/registrations' }
  # devise_for :users, :controllers => { registrations: 'users/registrations' }

  
  root 'welcome#index'

  
end
