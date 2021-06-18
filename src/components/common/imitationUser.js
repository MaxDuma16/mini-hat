import { createMessage } from "./createMessage"

export const imitationUser = (countMessages, userName, channelTitle, channelDescription, addMessage, deleteMessage, imitationUserName, imitationUserCounter, IncrementCounter, toggleIsWrites) => {
  if (imitationUserCounter < 6) toggleIsWrites(true)
  const imitationUserId = 2;
  const createImitationUserMessage = (text) => {
    const message = createMessage(text, countMessages, imitationUserId);
    addMessage(message);
  }
  switch(imitationUserCounter) {
    case 1:
      const text = `Hello, ${userName}! I am ${imitationUserName}`;
      setTimeout(() => {createImitationUserMessage(text)}, 1500); 
      break;
    case 2:
      const text2 = `Good topic for discussion, "${channelTitle}"!`;
      const text3 = `But for me the description is too short, "${channelDescription}". So, ${userName}, let's talk about ${channelTitle}`;
      setTimeout(() => {createImitationUserMessage(text2)}, 1000); 
      setTimeout(() => {createImitationUserMessage(text3)}, 2000); 
      break;
    case 3:
      const text4 = `Sounds great!`;
      setTimeout(() => {createImitationUserMessage(text4)}, 1500); 
      break;
    case 4:
      const text5 = `I'm Agree :)`;
      const text6 = `You know what! I thinsdfs!`;
      const text7 = `oops! I made a mistake in the previous message`;
      const text8 = `Perhaps I'll delete it...`;
      const text9 = `I mean! You know what!  ${userName} I think ${channelTitle} this is a great topic for discussion!`;
      setTimeout(() => {createImitationUserMessage(text5)}, 1000); 
      const message6 = createMessage(text6, countMessages, imitationUserId);
      setTimeout(() => {addMessage(message6)}, 1500);
      setTimeout(() => {createImitationUserMessage(text7)}, 2000); 
      setTimeout(() => {createImitationUserMessage(text8)}, 3000); 
      setTimeout(() => {deleteMessage(message6.messageId)}, 8000); 
      setTimeout(() => {createImitationUserMessage(text9)}, 9500); 
      break;
    case 5:
      const text10 = `${userName}! I have to go now. Talk to you later!`;
      const text11 = `Keep in touch! !`;
      setTimeout(() => {createImitationUserMessage(text10)}, 1200); 
      setTimeout(() => {createImitationUserMessage(text11)}, 2700); 
      break;
    default: break;
  }
  IncrementCounter();
  setTimeout(() => {toggleIsWrites(false)}, 3000); 
}