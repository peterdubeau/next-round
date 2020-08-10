class AddTaskToOffHooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :off_hooks, :task, null: false, foreign_key: true
  end
end
