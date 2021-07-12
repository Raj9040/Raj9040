/*CMD
  command: ☑️ Bind Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ☑️ Bind Wallet

  <<ANSWER
✏️ Send now your Paytm Number to use it in future withdrawals.

⚠️ This Wallet Will be used for withdrawals !!
  ANSWER
  keyboard: ❌Cancel,✔️Done
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*☑️Wallet Binded To:- "+message+"*")
