class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :company_code, :admin, :tickets, :admin_tickets

  def tickets
    if self.object.admin == false
      return Ticket.where(submitter_id: self.object.id)
    end
  end

  def admin_tickets
    if self.object.admin == true
      return Ticket.where(admin_id: self.object.id)
    end
  end
end
