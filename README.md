# Note App
Basic note taking console app that uses basic Node.js file I/O operations used to add, remove, list, and read content from a JSON file.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
Must install [Node.js](https://nodejs.org/en/).
### Using the application
To use this application, clone the repository with:
```bash
git clone https://github.com/tngo98/notes-app.git
```
Open up command prompt and change to the directory where the app was installed:
```bash
cd "directory"
```
Once in directory, make sure to install dependencies:
```bash
npm install
```
Now type in the following to use application:

To add a file:
```bash
node app.js add --title="titlename" --body="bodycontent" 
```
To remove a file:
```bash
node app.js add --title="titlename" 
```
To list all files:
To add a file:
```bash
node app.js list 
```
To read a file:
```bash
node app.js read --title="titlename" 
```
