class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :created_date, :author, :status, :completed_date, :completed_admin, :solution
  has_one :user
  has_one :user
end
