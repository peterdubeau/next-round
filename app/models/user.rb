class User < ApplicationRecord
  belongs_to :task
  belongs_to :off_hook, optional: true
  belongs_to :on_hook, optional: true
end