# PillYa - Final Project by Dilya Joseph
PillYa is a prescription medication tracker app. Users are able to see a list of their medication and relevant details and check them off a list. Eventually, more features will be added.

github repo for backend - https://github.com/dilyaj/final_project_api

## Technical Details

Made with Rails and React, hosted by Heroku.

The "new" thing that I applied to this project was Authorization using JWT (JSON Web Tokens)
Other than that, a large focus for me was the CSS, because I feel I have left styling on the backburner the last couple of projects.


## Technical Challenges
I started my project with setting up the Rails API backend. I wanted to make sure it was perfectly deployed before starting my frontend. This delayed my overall workflow. I learned that there should be equal amount of work put into backend and frontend on a day to day.


The frontend does not check the signature, it simply decodes the JWT so it can display its contents. The actual checks are performed by the backend. All JWTs are verified.
In retrospect, it's nice to know the heavy lifting was done server-side. I was anticipating it to be done on the client-side. 

## Future Improvements
While the objective of this project was to have Authorization in place, there are more features I'd like to add. I would like to continue styling the remaining pages. and add more functionality to the MyPillYa page. An alarm or notifications are what I'm thinking about!

