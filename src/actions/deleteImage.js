import $ from 'jquery'

export default function deleteImage(imageID, boardID){
  return function (dispatch) {
    $.ajax({
     url: `https://haven-rails-api.herokuapp.com/images/${imageID}`,
     type: 'DELETE',
     data: JSON.stringify({image: {board_id: boardID}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     dispatch({type:"UPDATE_IMAGES", images:response.images})
   })
  }
}
