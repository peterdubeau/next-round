class Task < ApplicationRecord
  has_many :users
  has_one :off_hook
  has_one :on_hook
end
