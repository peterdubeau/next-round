# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_10_204730) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "off_hooks", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.bigint "task_id", null: false
    t.index ["task_id"], name: "index_off_hooks_on_task_id"
    t.index ["user_id"], name: "index_off_hooks_on_user_id"
  end

  create_table "on_hooks", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "task_id", null: false
    t.bigint "user_id", null: false
    t.index ["task_id"], name: "index_on_hooks_on_task_id"
    t.index ["user_id"], name: "index_on_hooks_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name"
    t.string "code", limit: 5
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "task_id", null: false
    t.bigint "on_hook_id"
    t.bigint "off_hook_id"
    t.index ["off_hook_id"], name: "index_users_on_off_hook_id"
    t.index ["on_hook_id"], name: "index_users_on_on_hook_id"
    t.index ["task_id"], name: "index_users_on_task_id"
  end

  add_foreign_key "off_hooks", "tasks"
  add_foreign_key "off_hooks", "users"
  add_foreign_key "on_hooks", "tasks"
  add_foreign_key "on_hooks", "users"
  add_foreign_key "users", "off_hooks"
  add_foreign_key "users", "on_hooks"
  add_foreign_key "users", "tasks"
end
