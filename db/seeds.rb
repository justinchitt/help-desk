# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating seeds :)"

# Companies
flatiron = Company.create(name: "Flatiron School", company_code: "WQ123")
google = Company.create(name: "Google", company_code: "g00gle")

# Users
justinchitt = User.create(first_name: "Justin", last_name: "Chittarath", company_code: "WQ123", username: "justinchitt", email: "justinchitt@gmail.com", password: "justin1234", password_confirmation: "justin1234", admin: true)
sarahbam = User.create(first_name: "Sarahi", last_name: "Barraza", company_code: "WQ123", username: "sarahbam", email: "sarahb@gmail.com", password: "sarah1234", password_confirmation: "sarah1234")


# Tickets
Ticket.create!(subject: "Internal Server Error", description: "When I try to fetch the current user, I receive unauthorized.", created_date: "11/20/21", author: "Sarahi", status: "completed", completed_admin: "Justin", completed_date: "11/21/21", solution: "The backend team forgot to skip authorization for the show users method, I fixed that.", admin_id: justinchitt.id, submitter_id: sarahbam.id)
Ticket.create!(subject: "Computer Freezing", description: "Every time I open a new tab, my computer takes forever to load the page.", created_date: "11/20/21", author: "Sarahi", submitter_id: sarahbam.id)

puts "Finished seeding, master Chittarath"