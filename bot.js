import { Client } from 'discord.js';

const client = new Client();
import { config } from "dotenv";

config();

const gifUrl = [
    'https://i.postimg.cc/FKF51q4g/Fly.gif',
    'https://i.postimg.cc/Y0WTJB6k/Fly2.gif',
    'https://i.postimg.cc/TPk8b928/rocket.gif',
    'https://i.postimg.cc/9QYHm2vQ/rocket2.gif',
    'https://i.postimg.cc/YqgwPYRg/rocket3.gif',
    'https://i.postimg.cc/T36Xv1Ns/rocket4.gif',
    'https://i.postimg.cc/xC7Wx1bt/rocket5.gif',
    'https://i.postimg.cc/sfGFB7t8/rocket6.gif',
]

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag} !`);
});

client.on("message", async(msg) => {

    if(msg.content === "!fly"){

        const randomIndex = Math.floor(Math.random() * gifUrl.length);
        const randomUrl = gifUrl[randomIndex];
        msg.channel.send(randomUrl);
        msg.delete();

    }
});