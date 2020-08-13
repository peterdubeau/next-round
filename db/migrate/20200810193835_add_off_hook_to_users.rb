class AddOffHookToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :off_hook, null: false, foreign_key: true
  end
end
