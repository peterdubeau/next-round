class CreateOffHooks < ActiveRecord::Migration[6.0]
  def change
    create_table :off_hooks do |t|
      # t.references :task, null: false, foreign_key: true
      # t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
