import { Year } from './../js/bike.js';

$(document).ready(function() {
  $('#bikeStolen').click(function(){
    let city = $('#location').val();
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showStolen').text(`The amount of bikes stolen in ${city} is ${response.proximity}`);
      },
    });
  });
});
