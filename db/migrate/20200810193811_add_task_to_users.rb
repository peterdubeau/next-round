class AddTaskToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :task, null: false, foreign_key: true
  end
end
