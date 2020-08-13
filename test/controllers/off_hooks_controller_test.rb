require 'test_helper'

class OffHooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @off_hook = off_hooks(:one)
  end

  test "should get index" do
    get off_hooks_url, as: :json
    assert_response :success
  end

  test "should create off_hook" do
    assert_difference('OffHook.count') do
      post off_hooks_url, params: { off_hook: { task_id: @off_hook.task_id, users_id: @off_hook.users_id } }, as: :json
    end

    assert_response 201
  end

  test "should show off_hook" do
    get off_hook_url(@off_hook), as: :json
    assert_response :success
  end

  test "should update off_hook" do
    patch off_hook_url(@off_hook), params: { off_hook: { task_id: @off_hook.task_id, users_id: @off_hook.users_id } }, as: :json
    assert_response 200
  end

  test "should destroy off_hook" do
    assert_difference('OffHook.count', -1) do
      delete off_hook_url(@off_hook), as: :json
    end

    assert_response 204
  end
end
