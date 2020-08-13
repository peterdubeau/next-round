class ChangeOffHooksToNull < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:off_hooks, :user_id, true)
  end
end
