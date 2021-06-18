import { ADD_MESSAGES, DELETE_MESSAGES, ADD_USER_NAME, ADD_CHANNEL_TITLE, ADD_CHANNEL_DESCRIPTION, CLEAR_STATE, INCREMENT_COUNTER, TOGGLE_IS_WRITES } from './messagesActions';

const messagesReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGES:
      return {
        ...state,
        messages: [ ...state.messages, action.payload ]
      }
    case DELETE_MESSAGES:
      return {
        ...state,
        messages: [ ...state.messages.filter(m => m.messageId !== action.payload)  ]
      }
    case ADD_USER_NAME:
      return {
        ...state,
        userName: action.payload
      }
    case ADD_CHANNEL_TITLE:
      return {
        ...state,
        channelTitle : action.payload
      }
    case ADD_CHANNEL_DESCRIPTION:
      return {
        ...state,
        channelDescription: action.payload
      }
    case CLEAR_STATE:
      return {
        ...action.payload
      }
    case INCREMENT_COUNTER:  
      return {
        ...state,
        imitationUserCounter: state.imitationUserCounter + 1
      }
    case TOGGLE_IS_WRITES: 
      return {
        ...state,
        isWrites: action.payload
      }
    default: return state;
  }
};
export default messagesReducer;