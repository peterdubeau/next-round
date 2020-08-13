class OffHook < ApplicationRecord
  belongs_to :task
  has_many :users
end
