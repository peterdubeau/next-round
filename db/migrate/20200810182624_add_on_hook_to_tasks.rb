class AddOnHookToTasks < ActiveRecord::Migration[6.0]
  def change
    add_reference :tasks, :on_hook, null: false, foreign_key: true
  end
end
