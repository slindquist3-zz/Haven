import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function boardRequest(formValue) {
  return function(dispatch) {
  $.ajax({
     url: `https://haven-rails-api.herokuapp.com/boards/${formValue}`,
     type: 'GET'
    //  data: { item: item },
    //  success: () => { return{type:"FETCH_BOARD", payload: board}}
  }).done(function(response){
    dispatch({type:"FETCH_BOARD", currentBoard: response.board})
    browserHistory.push('/board')
  })
  }
}
