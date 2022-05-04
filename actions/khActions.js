const knex = require("../config/knex");

const khActions = async (client, message) => {
  const { content } = message;
  if (Number.isNaN(Number(content))) {
    return message.reply("Введите номер вопроса числом");
  }

  const [answer] = await knex("kh").where({ question: Number(content) });

  return message.reply(`Ответ на ${content}й порос это: ${answer.answer}`);
};

module.exports = {
  khActions,
};
