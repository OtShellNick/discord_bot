const khActions = (client, message) => {
  console.log("Message", message.content);
  message.reply(message.content);
};

module.exports = {
  khActions,
};
