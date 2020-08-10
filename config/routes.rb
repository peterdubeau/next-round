Rails.application.routes.draw do
  resources :users
  resources :off_hooks
  resources :on_hooks
  resources :tasks
  post '/users/:id', to: 'users#create'
  # post '/tasks/:id', to: 'tasks#create'
  post '/users/:user_id/tasks/:id', to: 'tasks#add_user'
  get '/tasks/:id/users', to: 'tasks#show_users'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
