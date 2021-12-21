class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :created_date, :author, :status, :completed_date, :completed_admin, :solution
end
