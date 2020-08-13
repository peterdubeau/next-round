class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.boolean :is_admin
      # t.references :task, null: false, foreign_key: true
      # t.references :off_hook, null: false, foreign_key: true
      # t.references :on_hook, null: false, foreign_key: true

      t.timestamps
    end
  end
end
