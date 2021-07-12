/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💸Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("wallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 0.5) {
    Bot.sendMessage("_⚠️ Minimum Balance Required Rs.2_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_✨Maximum Withdraw " + balance.value().toFixed(2) + "Rs That You Own✨_"
      )
    } else {
      Bot.sendMessage(
        "*🚀 Withdrawal Processed*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@payment_of_bot",
        text:
          "*🧧 New Withdraw Requested 🧧\n\n▪️ Status = Under Checking\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " Rs\n▪️ User Referrals = " +
          refList.length +
          "\n\n ☑️Binded Wallet 👇\n " 
         + wallet +
          "\n\n👮🏻‍♂️ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}
var lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "😊REFER AND EARN😊";
}
Bot.sendMessageToChatWithId(1276033492, msg);
