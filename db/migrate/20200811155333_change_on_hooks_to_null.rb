class ChangeOnHooksToNull < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:on_hooks, :user_id, true)
  end
end
