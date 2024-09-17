Eventonica is an application designed to showcase various events. Users can view a list of upcoming events and have the capability to add, edit, or remove events. Additionally, users can search for events by title.

Key Features
Fetch event data from a database via GET requests.
Display and parse JSON data in the React frontend.
Utilize React components, props, and state for managing events.
Track changes made by users, including additions and edits.
Implement a search function to filter events by title.

SetUp Instructions

1.Clone the Repository

Copy the repository to your local machine:
git clone git@github.com:hantakasc/TechtonicaAssignments.git

Navigate to project directory:
cd Eventonica

Optionally, remove the existing git repository to set up a new local repository:
rm -rf .git

Install Dependencies

For both client and server directories:

Navigate to the appropriate directory:
cd client
cd server (after setting up the client)
Install all necessary packages:
bash
Copy code
npm install
This command installs packages needed for both the frontend (Vite and React) and backend (Express.js, cors, and nodemon).

Configure Environment Variables

Create a .env file in the server directory.
Set Up the Database

Option A: If you have PostgreSQL configured with a user:

Run the following command:
bash
Copy code
psql -U <user> techtonica -f db.sql
Enter your PostgreSQL password when prompted.
Option B: If your PostgreSQL setup does not require a user:

Execute:
bash
Copy code
psql techtonica -f db.sql
Open .env.example in the server directory and copy the appropriate settings to your new .env file.
Your .env might look like:
bash
Copy code
DATABASE_URI="postgresql://localhost/techtonica"
Create the Database

⚠️ Ensure a database named techtonica exists. If not:

In the psql terminal, execute:
sql
Copy code
create database techtonica;
Run the Application

Start Frontend & Backend Together:

Move to the server directory:
bash
Copy code
npm run dev
The application should be available at the default URL (typically http://localhost:5173).

