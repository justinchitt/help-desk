Rails.application.routes.draw do
  resources :tickets, only: [:index, :show, :create, :update, :destroy]
  # resources :users 
  resources :companies, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/ticketadmin", to: "tickets#admin_tickets"
  # patch "/tickets/claim/:id", to "tickets#claim"
  patch "/users/update/:id", to: "users#update"
end
