/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: JOINING SYSTEM

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "⚡️ Joined ", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "*💡 Must Join Channels To Start\n\n➡️[*[OUR CHANNEL](https://t.me/daily_Earn_moneyy)*]\n➡️[*[OUR CHANNEL](https://t.me/technicaldebojit) *]\n➡️[*[OUR CHANNEL](https://t.me/Earning_Tips_loot)*]\n➡️[*[OUR CHANNEL](https://t.me/payment_of_bot)*]\n➡️[*[OUR CHANNEL](https://t.me/earnmoneyhere11)*]\n➡️[*[OUR CHANNEL](https://t.me/PRITISH_LOGOS)*]\n\n After Joined Click On '⚡Joined' Button*",{disable_web_page_preview: "true"}
)

let welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)

  User.setProperty("welco", user.telegramid, "text")
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
   var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0.0)
  Bot.sendMessageToChatWithId(refUser.chatId, ""
   
)
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
