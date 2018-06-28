class Todo < ActiveRecord::Base
  before_validation { |t| t.title.try(:strip!) }
  validates :title, presence: true

  scope :completed, -> (status) { where(is_completed: status) }
  scope :belonging_to, -> (session_user_id) { where(session_user_id: session_user_id) }
end
