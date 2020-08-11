class Task < ApplicationRecord
  has_many :users, dependent: :destroy
  has_one :off_hook, dependent: :destroy
  has_one :on_hook, dependent: :destroy
end
