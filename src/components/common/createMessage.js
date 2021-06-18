const getZero = (num) => {
  if(num >= 0 && num < 10) {
      return `0${num}`;
  } else {
      return `${num}`;
  }
}

export const createMessage = (text, countMessages, messageOwnerId) => {
  const Data = new Date();
  const message = {
  text: text,
  messageId: countMessages + 1 + Math.random(),
  messageOwnerId: messageOwnerId ? messageOwnerId : 1,
  data: {
    hours: getZero(Data.getHours()),
    minutes: getZero(Data.getMinutes())
    }
  }
  return message;
}