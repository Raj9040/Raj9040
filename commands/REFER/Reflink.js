/*CMD
  command: Reflink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: REFER
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*⚡️ Referral System 🥳\n\n 💹 You can earn 0.5Rs / Per Successfull Refer🛒\n\n👫  You have "+refList.length+" Referrals.\n\n🚀 Your referal links : "+reflink+"\n\nRefer More And Earn More!!*");
}
