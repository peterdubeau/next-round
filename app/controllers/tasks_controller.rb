class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy, :create]
  # before_action only: [:create, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all

    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    
    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  def destroy_test
    @task = Task.find_by code: (params[:code])
    @task.destroy
  end

  def add_user
    @task = Task.find_by code: (params[:code])
    @user = User.find(params[:user_id])

    @task.users << @user

    render json: @task, include: :users
  end

  def show_users
    @task = Task.find_by code: (params[:code])
    @users = @task.users

    # @task.users << @users

    render json: @task, include: :users
  end

  def show_task_details
    @task = Task.find_by code: (params[:code])
    @on_hook = @task.on_hook
    
     

    render json: @task, include: :on_hook
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find_by code: (params[:code])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:name, :code, :user_id, :off_hook_id, :on_hook_id)
    end
end
