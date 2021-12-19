class ChangeUsersTable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :tickets, :admin_id, true
    change_column_null :tickets, :solution, true
    change_column_null :tickets, :completed_date, true
    change_column_null :tickets, :completed_admin, true
  end
end
