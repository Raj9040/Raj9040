/*CMD
  command: 💸Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💸Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_⛔️Must Set Wallet Before Withdrawal_")
}else{
if (balance.value() < 2){
Bot.sendMessage("_⚠️ Minimum Balance Required Rs.2_")
}else{
Bot.sendMessage("*⚠️ Enter A Amount To Withdraw As Paytm Cash\n▪️Must Have At Least 5Rs In Your Account To Recieve Withdrawal *")
Bot.runCommand("Auto")
}
}}
