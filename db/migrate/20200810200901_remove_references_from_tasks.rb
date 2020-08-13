class RemoveReferencesFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_reference :tasks, :off_hook, null: false, foreign_key: true
    remove_reference :tasks, :on_hook, null: false, foreign_key: true
    remove_reference :tasks, :user, null: false, foreign_key: true
  end
end
