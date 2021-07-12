/*CMD
  command: 👫Refer and Earn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: REFER
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [
  [{ text: "👫Refer Link", callback_data: "Reflink" }],
  [
    { text: "🎖Top Referals", callback_data: "🎖Top Referals" }
  ]
]
Api.sendPhoto({
  photo: "https://t.me/TotalGaming_Offical_Group/33757",
  caption:
    "*🏡 Welcome To Refer And Earn\n\n🎙Per Referral - 0.5 Rs\n\n👥 Total Invites : " +
    refList.length +
    " Users*",
  reply_markup: { inline_keyboard: button }, 
parse_mode: "Markdown"})

