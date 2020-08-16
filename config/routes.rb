Rails.application.routes.draw do
  resources :users
  resources :off_hooks
  resources :on_hooks
  resources :tasks
  post '/users/:id', to: 'users#create'
  post '/users/:user_id/tasks/:code', to: 'tasks#add_user'
  post '/on_hooks/:on_hook_id/tasks/:code', to: 'on_hooks#add_on_hooks'
  post '/off_hooks/:off_hook_id/tasks/:code', to: 'off_hooks#add_off_hooks'
  get '/tasks/:code/users', to: 'tasks#show_users'
  get '/tasks/:code/on_hooks', to: 'tasks#show_task_details'
  delete '/tasks/:code/users', to: 'tasks#destroy_test'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
