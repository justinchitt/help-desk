class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.text :description
      t.string :created_date
      t.string :author
      t.string :status
      t.string :completed_date
      t.string :completed_admin
      t.text :solution
      t.references :admin, foreign_key: { to_table: :users }
      t.references :submitter, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
