class Ticket < ApplicationRecord
  belongs_to :submitter, class_name: "User", foreign_key: "submitter_id"
  belongs_to :admin, class_name: "User", foreign_key: "admin_id", optional: true
end
