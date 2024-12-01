const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_49_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrZm1XMFRmU3pLcjJ2LythL3lmK2ZyQjVld0g5cm9wWE5Cdi90d1lNWnY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY0NzY2OTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RkJEMzAwNDQ4RTAwQ0Y4NkY3OUEyN0VFMUU4QTIyOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwMzU3NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NDc2Njk1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEU1NUREMDA0MjhEREQyMzIwREMwRTFCM0Q5ODUwRUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDM1NzU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjQ3NjY5NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFRTVGODUyMjY4OERDNEI1NERCMjQzRUQ4RjhGMkM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzAzNTc2NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4eU5VX1A2clN1V21ycUl3UGhQb2d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzNDAyNzg3LWE2MjItNGQ1ZC05OGM4LTY5OGQ3MzlmZDVjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDIzNSxcbiAgICAgIDIyNixcbiAgICAgIDEzOSxcbiAgICAgIDc0LFxuICAgICAgMTgzLFxuICAgICAgMTkyLFxuICAgICAgMTE0LFxuICAgICAgMTgzLFxuICAgICAgMjQzLFxuICAgICAgNzUsXG4gICAgICAxMixcbiAgICAgIDkzLFxuICAgICAgMyxcbiAgICAgIDE2NixcbiAgICAgIDY1LFxuICAgICAgMjQ3LFxuICAgICAgMTUzLFxuICAgICAgMTkxLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNTcsXG4gICAgICAyMSxcbiAgICAgIDIxMCxcbiAgICAgIDEyNSxcbiAgICAgIDYsXG4gICAgICAxOTAsXG4gICAgICA2NCxcbiAgICAgIDEwNCxcbiAgICAgIDIxMixcbiAgICAgIDgsXG4gICAgICAxMjcsXG4gICAgICAyMDksXG4gICAgICAxMSxcbiAgICAgIDIzOSxcbiAgICAgIDEyNixcbiAgICAgIDgwLFxuICAgICAgMjUwLFxuICAgICAgMTQzLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxYS1I2UTFZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDc2Njk1NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TrfCdk7LwnZO38J2TvvCdk7/wnZOqXCIsXG4gICAgXCJsaWRcIjogXCIxMDc4MzQyMzA0NDAxNDk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRG9xOWdIRU9tTnNMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitCNmkvMVNsMG5wdHg3WERIbzA3OUNYTXVUbS9KVmNJRHZDWkIrTFZHbEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVJqcHhEbjJibnlKTUJZWjZHeS9QNHVEUzFwUzM5MHhXeUNWSFByOWFGQ3pMUGovWWIwdTJDZE54RVdzdTZ4cG0vZXhlK3ZLMURNWitSUGVnYklhRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwialhPQVAxR1BrVGRIR0t1QXE4VXFyOEg1czZQbXZXNFdhZnFxMFFzOUpUQjVFeGx5S0dnNzE5dC9BTlF3dDRRVU1uYzVWQjI5Q0xRUzJzb044UTlXaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjQ3NjY5NTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzAzNTc1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU1SFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVILmpzb24iOiAie1wia2V5RGF0YVwiOlwiZks0OVFkcGs4bHkwdWR5MzlHenRmMFZIZTV1cE9iYzYwV2QrcExZWnJ3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDY0MzE1NDI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwMzU3NTgwNTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
