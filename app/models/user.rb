class User < ApplicationRecord
    has_secure_password
    # belongs_to :companies

    has_many :submitted_tickets, foreign_key: "submitter_id", class_name:"Ticket"
    has_many :admins, through: :submitted_ticket
    has_many :accepted_tickets, foreign_key: "admin_id", class_name:"Ticket"
    has_many :submitters, through: :accepted_tickets

    PASSWORD_FORMAT = /\A
        (?=.{8,})          # Must contain 8 or more characters
        (?=.*\d)           # Must contain a digit
        (?=.*[a-z])        # Must contain a lower case character
        (?=.*[A-Z])        # Must contain an upper case character
        (?=.*[[:^alnum:]]) # Must contain a symbol
    /x

    validates :username, uniqueness: true
    # validates :email, uniqueness: true

    validates :password, 
        presence: true, 
        length: { in: 8..40 }, 
        format: { with: PASSWORD_FORMAT }, 
        confirmation: true, 
        on: :create 

    validates :password, 
        allow_nil: true, 
        length: { in: 8..40 }, 
        format: { with: PASSWORD_FORMAT }, 
        confirmation: true, 
        on: :update


end
