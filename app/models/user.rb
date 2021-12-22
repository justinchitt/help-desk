class User < ApplicationRecord
    has_secure_password
    belongs_to :company

    has_many :submitted_tickets, foreign_key: "subtmitter_id", class_name:"Ticket"
    has_many :admins, through: :submitted_ticket
    has_many :accepted_tickets, foreign_key: "admin_id", class_name:"Ticket"
    has_many :submitters, through: :accepted_tickets
end
