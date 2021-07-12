/*CMD
  command: /main
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(0.5)
  Bot.sendMessageToChatWithId(refUser.chatId, "🎊0.5RS FROM:- "+user.first_name+" 🎊")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("🎁 Daily Checkin,💰Balance,\n👫Refer and Earn,☑️ Bind Wallet,\n💸Withdraw,🎖Check Referral,📊Statistics ", "*🔝 Main Menu*")
}
if (user=="left"){
Bot.runCommand("/start");
}
