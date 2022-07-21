
# Discord Log Bot

A simple log bot for your discord server coded in JavaScript.
* Message Deleted
* Message Edited

Going to add more events in the future. Wasn't sure what to add since you can see a lot of them 
in the audit log anyway.

## Requirements

* [Nodejs Download](https://nodejs.org/en/)
* A code editing program such as [Visual Studio Code](https://code.visualstudio.com/)

## Setting up the project

In Visual Studio Code, If you don't see a terminal at the bottom. Go to Terminal ->
New Terminal. Type the following lines seperately into the terminal.
```bash
npm init -y
npm install discord.js dotenv
```
if you encounter any problems. Open the program as an administrator.

After successfully installing everything make a new file called '*index.js*', 
copy and paste or replace the code from my index.js file to yours. Create another file '*.env*' 
which is going to be where you store your discord token.

Type this into the .env file
```bash
TOKEN=COPY AND PASTE YOUR TOKEN HERE
```

## Running the project

To run your project, type this into your terminal
```bash
node index.js
```
This part is optional but, you can also add this into your package.json -> scripts 
```bash
"dev": "nodemon index.js"
```
Install nodemon by typing 'npm install nodemon' into the terminal.
This makes it so everytime you save your file it updates automatically without you having to restart the bot.

Run this in your terminal to activate.
```bash
npm run dev
```
