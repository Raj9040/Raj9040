/*CMD
  command: 💰Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var button = [[{ title: "💸Withdraw", command: "💸Withdraw" }]]
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendInlineKeyboard(
  button,
  "*🧑🏻‍💻 User = " +
    user.first_name +
    "\n\n👤 Username : @" +
    user.username +
    "\n\n💶Balance : " +
    balance.value().toFixed(5) +
    " Rs\n\n💸Minimum Withdraw: 2Rs 💶\n\n⌛️ Total User Refer : " +
    refList.length +
    "\n\n🧑🏻‍💻 Refer And Earn More 💶*"
)
var balance = Libs.ResourcesLib.userRes("balance")
