const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07556385236";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_23_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGTzNzMDkrR09Wdm9UK3I4K2RDNXBkRHZNY0I5eXZZcjlpSXFRaFpzSG1zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzU1NjM4NTIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMThGRDZCODcyRkJFMTI3MkJCRjdBMEI4QTk0QkMwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MDYyMzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUlGZUtiVm1UWHVjaExpcWs4aUx0d1wiLFxuICBcInBob25lSWRcIjogXCI3YTI5ZWZjMS1mZTliLTRmM2UtOTZmMy02MjZlYWJiZmViNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMCxcbiAgICAgIDQ3LFxuICAgICAgMjI2LFxuICAgICAgNTAsXG4gICAgICAxMCxcbiAgICAgIDI0NCxcbiAgICAgIDIxNSxcbiAgICAgIDEzMixcbiAgICAgIDI1MCxcbiAgICAgIDEzOCxcbiAgICAgIDIwNCxcbiAgICAgIDYsXG4gICAgICAyNTAsXG4gICAgICAyMDAsXG4gICAgICAxMjIsXG4gICAgICAwLFxuICAgICAgNjEsXG4gICAgICA3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDIxOSxcbiAgICAgIDExLFxuICAgICAgMjUsXG4gICAgICAzMCxcbiAgICAgIDIxNixcbiAgICAgIDIzLFxuICAgICAgMzAsXG4gICAgICAxMzUsXG4gICAgICAxMDksXG4gICAgICAyMDMsXG4gICAgICAyMzIsXG4gICAgICAyNDMsXG4gICAgICAxMDUsXG4gICAgICAyMTUsXG4gICAgICAxMTIsXG4gICAgICAxNTAsXG4gICAgICAxMzIsXG4gICAgICAxNzYsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU5WMzdRMVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzU1NjM4NTIzOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NTE5MDg4MzQ0Mjg2MDo0NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJraWtp8J+NgFxcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTHQ2ZW9IRUpHbTZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZvWUNlTHIyWGJvMUJHQnRpaEVObWdkd0oxdlhWck1ZaGR4aHJ5cndjMjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGVVZ0ozNXhyODlhVGFMcCtuZURtdUpjZGtJSkNOZDNtSlk2MFFFOVhkSjhUVFE0K0czcEt3RVRyYWxNSHRIcFBFemxJWE5TYUlDTGtETW9jNjYxQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidmllVVlLV2xmU25ZemEyb09zVkw5aUZjS25NWXA4bXJ4UWtwMUZYckE2NEl1LzJQb0orVEE2ckdGdEZzMUh0TVUwUW5rcjB6YVEyZTBRTFFuT1pSakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NTU2Mzg1MjM6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDA2MjI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlFRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5dlU0UHAyNWtMZWpUWmFjWHpUTlRkUCtFM2JGR1hla2xkbnNPY0p3QS9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDMwODA2MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQwNjIzMTQ2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kiki bot",
  ownername:process.env.OWNER_NAME|| "kiki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "kiki șefu"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
