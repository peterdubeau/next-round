class OffHooksController < ApplicationController
  before_action :set_off_hook, only: [:show, :update, :destroy]

  # GET /off_hooks
  def index
    @off_hooks = OffHook.all

    render json: @off_hooks
  end

  # GET /off_hooks/1
  def show
    render json: @off_hook
  end

  # POST /off_hooks
  def create
    @off_hook = OffHook.new(off_hook_params)

    if @off_hook.save
      render json: @off_hook, status: :created, location: @off_hook
    else
      render json: @off_hook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /off_hooks/1
  def update
    if @off_hook.update(off_hook_params)
      render json: @off_hook
    else
      render json: @off_hook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /off_hooks/1
  def destroy
    @off_hook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_off_hook
      @off_hook = OffHook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def off_hook_params
      params.require(:off_hook).permit(:task_id, :users_id)
    end
end
