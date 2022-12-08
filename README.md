# Claim Discord Developer Badge
> This is a open source repo for people who can't not coding  
> If there's any bug, feel free to make a pull request  


# Step
## Step -1
> Install dependency
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
```bash
npm -i -g yarn
```
## Step -2
> Install code pendenncy
```bash
yarn  
# or  
yarn install
```

## Step -3
> Create your own discord bot
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
15. Open cmd or any terminal enter command below
```bash
yarn dev
```
16. Go to discord server and create a text channel
17. Use `/claim` to get the info from the bot
18. After 24h, Click the link that bot give you.
19. Claim!
20. Done

# QA
> If you got any issue or error, please open a ticket on github

Peace out:3