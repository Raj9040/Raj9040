/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: JOINING SYSTEM
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("join2")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌Not Joined All channels*")
}
