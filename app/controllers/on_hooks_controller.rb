class OnHooksController < ApplicationController
  before_action :set_on_hook, only: [:show, :update, :destroy]

  # GET /on_hooks
  def index
    @on_hooks = OnHook.all

    render json: @on_hooks
  end

  # GET /on_hooks/1
  def show
    render json: @on_hook
  end

  # POST /on_hooks
  def create
    @on_hook = OnHook.new(on_hook_params)

    if @on_hook.save
      render json: @on_hook, status: :created, location: @on_hook
    else
      render json: @on_hook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /on_hooks/1
  def update
    if @on_hook.update(on_hook_params)
      render json: @on_hook
    else
      render json: @on_hook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /on_hooks/1
  def destroy
    @on_hook.destroy
  end

  def add_on_hooks
    @task = Task.find_by code: (params[:code])
    @on_hook = OnHook.find(params[:on_hook_id])

    # @task.on_hook << @on_hook

    render json: @task, include: :on_hook
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_on_hook
      @on_hook = OnHook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def on_hook_params
      params.require(:on_hook).permit(:task_id, :users_id)
    end
end
