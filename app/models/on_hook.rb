class OnHook < ApplicationRecord
  belongs_to :task
  has_many :users
end
