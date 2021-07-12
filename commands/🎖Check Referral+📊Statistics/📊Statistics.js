/*CMD
  command: 📊Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🎖Check Referral+📊Statistics
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*👦🏻  Total Users: " +
    status +
    " Users\n\n🚀 Bot Launched On : July 11th, 2021\n\nTotal Withdraw : " +
    userPayment.value().toFixed(0) +
    "0Rs\n\n⚡Bot Coded By:- @Sponsor_promotionbot⚡*"

  Bot.sendMessage(stat)
}

