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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0759368554";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_46_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUWG9STWlTSVY0QTl3ZDFzODVZU2w4aHJPMHBBZXlWeGRCOXk0YkdNaWdNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzU5MzY4NTU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMDU1NUQ5Nzg4ODI4RDVFQ0FGNDBERTE4NDBFRTlDM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNTg0MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzFQY19IQ1VRaENLX0pUaXZvUTl5Z1wiLFxuICBcInBob25lSWRcIjogXCIwNWQ1NWUwNC0yODU2LTRlNjQtYTBkMi0xM2ZmM2JhYzZhNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMjUyLFxuICAgICAgNjEsXG4gICAgICAxNjUsXG4gICAgICA5NCxcbiAgICAgIDcwLFxuICAgICAgMjI5LFxuICAgICAgNDksXG4gICAgICAyMTksXG4gICAgICAxMjcsXG4gICAgICAyMDYsXG4gICAgICAxNTcsXG4gICAgICAyMDAsXG4gICAgICAxODUsXG4gICAgICA3NCxcbiAgICAgIDgxLFxuICAgICAgNTIsXG4gICAgICAxMjEsXG4gICAgICA0OSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICA2NixcbiAgICAgIDIwOCxcbiAgICAgIDE1NSxcbiAgICAgIDcsXG4gICAgICAxODgsXG4gICAgICAxNDAsXG4gICAgICAxNzAsXG4gICAgICAyNDAsXG4gICAgICAxNjUsXG4gICAgICAzNyxcbiAgICAgIDEwMyxcbiAgICAgIDQ4LFxuICAgICAgNjMsXG4gICAgICAyMSxcbiAgICAgIDEzNSxcbiAgICAgIDIwOSxcbiAgICAgIDEzMyxcbiAgICAgIDE2MSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGVkFOUlJZRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NTkzNjg1NTQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgyMzkwODYxMDA0OTU0OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKdpc2czaHwlqCj6pmw2ZzZnNmc2ZzZnNmc2ZzZnNmczIvwnZCK8J2QovCdkKTwnZCi44O944O744CAVC5UXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1A3dXI4R0VJZWpzTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUUHVnVEd2UkxpSDdOeEllR24wUnhDakQ4UFFZZ0dnbExTR2RoaDBXT21BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI1bkpoVE91dE1Ua3RMY1Z4QXpjWVdTb0E5U3FFbUV5UXVLSllqRmpPY2tOMCs0dTZ0ZFlMQ2xnZ1RvdFhFR2JiU1NVeUp0cFJXT1BBdXlBdW9LK0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlp2U1dJbWdpYmg0TTFlTHBjYUV0TGwvbzNWaG1xMzNCZTZ4NCtZWmVSQmZVbmhPQ0NyTEtBMllBTHFZbW1Mb0g3SDk5dkpCZUg0dVJqSlAxZm5rekFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzU5MzY4NTU0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzU4NDExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0pvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJURkd0bFVQUU01d2p4UWRXVXdZR2lFMGFGdTJVSVIyRTl0NkI0S2pjbUdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDM2OTkzNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "kiki"  ).toUpperCase(),



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
