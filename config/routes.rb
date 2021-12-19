Rails.application.routes.draw do
  resources :tickets [:index, :show, :create, :update, :destroy]
  # resources :users
  resources :companies, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
