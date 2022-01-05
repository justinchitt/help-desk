

puts "Creating seeds :)"

# Companies
flatiron = Company.create(name: "Flatiron School", company_code: "WQ123")
google = Company.create(name: "Google", company_code: "g00gle")

# Users
justinchitt = User.create!(first_name: "Justin", last_name: "Chittarath", company_code: "WQ123", username: "justinchitt", email: "justinchitt@gmail.com", password: "Justin1234!", password_confirmation: "Justin1234!", admin: true)
sarahbam = User.create!(first_name: "Sarahi", last_name: "Barraza", company_code: "WQ123", username: "sarahbam", email: "sarahb@gmail.com", password: "Sarah1234!", password_confirmation: "Sarah1234!")


# Tickets
Ticket.create!(subject: "Internal Server Error", description: "When I try to fetch the current user, I receive unauthorized. I've tried restarting the both my frontend and back end servers. The error keeps occuring.", created_date: "11/20/2021", author: "Sarahi", status: "completed", completed_admin: "Justin", completed_date: "11/21/2021", solution: "The backend team forgot to skip authorization for the show users method, I fixed that.", admin_id: justinchitt.id, submitter_id: sarahbam.id)
Ticket.create!(subject: "Computer Freezing", description: "Every time I open a new tab, my computer takes forever to load the page. I don't know if it could be the wifi or my computer. I've tried restarting the router and modem. Please help, I cannot do any work without it working!!!", created_date: "11/20/2021", author: "Sarahi", submitter_id: sarahbam.id)

puts "Finished seeding, master Chittarath"