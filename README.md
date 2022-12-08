# Claim Discord Developer Badge
> This is a open source repo for people who can't not coding  

# Step By Step
## Step1 - Install dependency
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
```bash
npm -i -g yarn
```
## Step2 - Install code pendenncy
> Open cmd or any terminal enter command below
```bash
yarn  
# or  
yarn install
```

## Step3 - Create your own discord bot
- [Discord Developer Portal](https://discord.com/developers/applications)
1. New Application
2. Enter the Name
3. Copy the APPLICATION ID to code base `.env` (if the file is not exist, create a new one) 
4. `.env` content should be look like below
```
TOKEN=<Token>
CLIENTID=<APPLICATION ID>
GUILDID=<DISCORD SERVER ID>
```
5. On the left hand side bar click `Bot` tab
6. Add Bot
7. Reset Token
8. Copy the Token to code base `.env` (if the file is not exist, create a new one)
9. On the left hand side bar click `OAuth2` tab > `URL Generator` tab
10. Click `Bot` and `applications.commands` checkbox of the `scope` area
11. Click `Adminisrator` checkbox of the `Bot Premissions` area
12. Copy the link and paste in to browser url and hit the enter
13. Create a discord server and set it to community server
14. Invite Bot to Server
## Step4 - Register Command
> Open cmd or any terminal enter command below  
> Please make sure paste the discord server id to `.env` file
```bash
yarn deploy
```
## Step5 - Run Bot
> Open cmd or any terminal enter command below
```bash
yarn dev
```

## Step6 - Claim 
1. Go to discord server and create a text channel
2. typing `/claim` on discord message area then press enter
3. bot should be return a message for you. (if it's not please open a ticket)
4. After 24h, Click the link that bot give you
5. Claim!

# QA
> If you got any issue or error, please open a ticket on github  
> Please make sure you cleary discribe the issue

Peace out:3