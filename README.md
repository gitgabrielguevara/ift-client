#  Instant Family Trust


This is a fullstack application that allows users to create customized legal documents to protect their assets. The website will prompt the user to answer simple questions about themselves.  The information will be combined into the complex legal document out of the users view. An example would be like a living will for a resident of California. They can fill out as much or little as they have time for and save their progress to return later.  Once complete they will be able to print out a pdf of the full legal document. They will also have the ability to update or delete information as time goes on and new documents are desired. 

## User Stories
---
* As a user I can create a unique profile for my account.
* As a user I can create a legal document from the provided selections.
* As a user I can update my documents with required data and save them.
* As a user I can print out the finalized document for my records.



## Tech Used
---
* NodeJS
* Express
* React
* MongoDB
* CSS
* Postman
* Figma
* Trello
* Git

![and RD](/public/DevelUp-ERD.png)


## FRONTEND ROUTES 
---
|Path | Purpose|
|----| ------ |
| `/` | login page|
| `/signup` | register page|
| `/profile` | profile page |
| `document/:id` | document questionnaire page|

## BACKEND ROUTES
---
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `api-v1document/:id` | displays all the documents to choose from |
| POST | `api-v1document` | creates a form |
| PUT | `api-v1document/:id/form/:formId` | make changes of the forms |
| DELETE | `api-v1document/:id/form/:deckId` | deletes the whole form |
| POST | `api-v1/users/login` | login |
| POST | `api-v1/users/register` | register |


## Wireframes
---
<details>
  <summary> Initial Planning </summary>

![Sign-In](/public/wireframes/Sign%20In.png)
![Register](/public/wireframes/Sign%20Up.png)
![Profile](/public/wireframes/Profile%20Page.png)
![Create-Deck](/public/wireframes/Create%20a%20deck%20Page.png)
!document](/public/wireframesdocument%20Page.png)
![Decks](/public/wireframes/Decks%20Page.png)
![Card-Question](/public/wireframes/Card%20Page%20%5BQuestion%5D.png) 
![Card-Answer](/public/wireframes/Card%20Page%20%5BAnswer%5D.png)
![Card-Complete](/public/wireframes/Completed%20Page.png)

</details>
