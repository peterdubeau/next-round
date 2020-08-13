class AddUserToOnHooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :on_hooks, :user, null: false, foreign_key: true
  end
end
