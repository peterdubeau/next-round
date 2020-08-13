class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :code, :limit => 5
      # t.references :users, null: false, foreign_key: true
      # t.references :off_hook, null: false, foreign_key: true
      # t.references :on_hook, null: false, foreign_key: true

      t.timestamps
    end
  end
end
