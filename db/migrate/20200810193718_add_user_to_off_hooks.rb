class AddUserToOffHooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :off_hooks, :user, null: false, foreign_key: true
  end
end
