const khActions = (client, message) => {
  console.log(message);
  message.reply(message.content);
};

module.exports = {
  khActions,
};
