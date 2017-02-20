// import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function createBoard(boardTitle, otherUserEmail, userID) {
  return function(dispatch) {
  $.ajax({
     url: `https://haven-rails-api.herokuapp.com/boards`,
     type: 'POST',
     data: { title: boardTitle, other_user_email: otherUserEmail, user_id: userID }
  }).done(function(response){
    dispatch({type:"UPDATE_USER_BOARDS", boards: response.boards })
  })
  }
}
