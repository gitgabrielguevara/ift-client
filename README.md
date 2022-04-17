#  Instant Family Trust


This is a fullstack application that allows users to create customized legal documents to protect their assets. The website will prompt the user to answer simple questions about themselves. Behind the scenes the information is merged into the complex legal document. An example document would be a living will for a resident of California. They can fill out as much or little as they have time for and save their progress for later.  Once complete they will be able to print out a pdf of the full legal document. They will also have the ability to update or delete information as time goes on and new documents are desired. 

## User Stories
---
* As a user I can create a unique profile for my account.
* As a user I can create a legal document from the provided selections.
* As a user I can update my documents with required data and save them.
* As a user I can print out the finalized document for my records.

### Questions and Answers
How do you plan on learning/implementing this new technology?
- The new technology that will be implemented is Yaml. There is a decent amount of information available through thier website documenation. What I can't learn there will come from trial and error. 

What is your goal with this project?
- The main focus of this project is to create a functioning backend that compiles users documents. It is a challenge I have been thinking about for a long time. I would consider it a major success if I can get even a small part of the 50 legal documents I have stored for this use.

Who is the user for your app?
- My app is geared towards young families that will benefit from affordable legal plans that can be done in minutes in the comfort of their own homes. 

Any potential roadblocks you think you might run into?
- The biggest roadblock will be getting the input variables to concatenate into lengthy and complex structure of long page headings and paragraphs. 


## Wireframes
---
![Wireframes](/public/images/wireframes.png)

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
| GET | `api-v1/document/:id` | displays all the documents to choose from |
| POST | `api-v1/document` | creates a form |
| PUT | `api-v1/document/:id/form/:formId` | make changes on the forms |
| DELETE | `api-v1/document/:id/form/:formId` | deletes the whole form |
| POST | `api-v1/users/login` | login |
| POST | `api-v1/users/register` | register |

## Tech Used
---
* MongoDB
* Express
* React
* Node
* pdfKit




