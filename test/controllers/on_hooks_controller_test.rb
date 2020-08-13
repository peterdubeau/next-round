require 'test_helper'

class OnHooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @on_hook = on_hooks(:one)
  end

  test "should get index" do
    get on_hooks_url, as: :json
    assert_response :success
  end

  test "should create on_hook" do
    assert_difference('OnHook.count') do
      post on_hooks_url, params: { on_hook: { task_id: @on_hook.task_id, users_id: @on_hook.users_id } }, as: :json
    end

    assert_response 201
  end

  test "should show on_hook" do
    get on_hook_url(@on_hook), as: :json
    assert_response :success
  end

  test "should update on_hook" do
    patch on_hook_url(@on_hook), params: { on_hook: { task_id: @on_hook.task_id, users_id: @on_hook.users_id } }, as: :json
    assert_response 200
  end

  test "should destroy on_hook" do
    assert_difference('OnHook.count', -1) do
      delete on_hook_url(@on_hook), as: :json
    end

    assert_response 204
  end
end
