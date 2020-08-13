class AddOnHookToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :on_hook, null: false, foreign_key: true
  end
end
