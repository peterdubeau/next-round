class Task < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :off_hook, dependent: :destroy
  has_many :on_hook, dependent: :destroy
end
