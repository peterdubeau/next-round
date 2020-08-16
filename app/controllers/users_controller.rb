class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def add_user_to_on_hooks
    @user = User.find(params[:id])
    @on_hooks = Task.find(params[:id]).on_hook

    @on_hooks.users << @user

    render json: @on_hooks, include: :users
  end

  def reset_hooks
    @task = Task.find_by code: (params[:code])
    @user = User.where(task_id: @task.id)
    
  
    @user.each do |i| 
    i.update(off_hook_id: nil)
      end
    render json: @user, include: :off_hook_id
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :is_admin, :task_id, :off_hook_id, :on_hook_id)
    end
end
