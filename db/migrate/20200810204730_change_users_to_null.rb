class ChangeUsersToNull < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:users, :on_hook_id, true)
    change_column_null(:users, :off_hook_id, true)
  end
end
