# Fullstack Example : Frontend

There is already this frontend out there to see this full stack application in action.
The ready frontend can be accessed [here](https://fullstack-frontend-388106.ey.r.appspot.com/).

## Prerequisite

To build this frontend you need the following software

- [Git Version Control](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://www.postman.com/downloads/)
- if you plan to modify this project (to do the exercise) please fork it first

## Setup

- Install Git (if not already installed for the backend)
- Install Visual Studio Code
- Install Node.js
  (you can instead download a ZIP file and extract it, but then you need to set the path every time)
- Create a new folder on your hard disk which should hold the source code
- Open a command prompt and change to the new folder
- Checkout this repository or your forked GitHub project

      git clone https://github.com/phd4hd/fullstack-frontend.git

- In the same folder launch '**npm install**' to download all required packages
- Launch Visual Studio Code and open this folder (File -> Open folder)

## Run

- Note that you need the backend to run, so that the frontend can access any data.
  Without the backend you just see an almost empty browser screen (only the navigation bar is shown)
- If you don't have a backend running yet, you can access mine [here](https://fullstack-backend.ew.r.appspot.com/).
  You need to change the 'axiosConfig.js' file where to find the backend
- Open a command prompt and change to the source folder
  (you can also use a command prompt inside Visual Studio Code, if you like)
- Launch the command

      npm start
      
- This will open the web page on your default browser. Keep it running until you completed coding.
  It will automaticall compile new code as soon as you modifiy and save a file.
- If you are finished terminate with Ctrl+C

## Testing

### Test 1

- Click on the 'Reading List' entry in the navigation bar
- An error should be displayed saying 'Sorry, this page is not yet implemented'

### Test 2

- Click on the 'Reviews' button while any book is shown
- The review page should be shown with the book cover in big on the left side and the review form on the right side

### Test 3

- While on the review page enter some text below the 'Write a Review?' label
- Press the 'Submit' button
- You should stay on the same review page but the entered text should be displayed at the end of the list
