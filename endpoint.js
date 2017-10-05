//basic Html template for request
<!DOCTYPE html>
<html>
<body>

<h1>Find followers of Users</h1>
<p>Enter username:</p>
<input type="text"id="username"></input>
<button type="button" id="button">Return Followers</button>
<div id="returnInfoHere">
</div>
</body>
</html>

// Make request to Github

$("#button").click(function(){
var username = $("#username").val();
$.ajax({
  url:'https://api.github.com/users/'+username,
  data:{
    client_id:'9ecc0f206ecd34f2f552',
    client_secret:'6eee17df91630a531ea2acf49848dec408079e9c'
  }
}).done(function(user){
  $.ajax({
    url:'https://api.github.com/users/'+username+'/followers?per_page=5',
    data:{
      client_id:'9ecc0f206ecd34f2f552',
      client_secret:'6eee17df91630a531ea2acf49848dec408079e9c'
    }
  }).done(function(followers){
    $.each(followers, function(index, follower){
      $('#returninfo here').append(`
        <p>$username</p>
        <p>$followers</p>
      `);
    });
  });
 
});
