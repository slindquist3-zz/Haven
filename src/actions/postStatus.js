import $ from 'jquery'
// import boardRequest from '../actions'

export default function postStatus(formValues){
  //formValues = {content: "hello world", user_board_id: 1}
  return function (dispatch) {
    $.ajax({
     url: 'https://haven-rails-api.herokuapp.com/posts',
     type: 'POST',
     data: JSON.stringify({post: {content: formValues.content, user_board_id: formValues.userBoardID}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(
     (response) => {
       dispatch({type:"UPDATE_POSTS", posts: response.posts});
     }
   )
  }
}
