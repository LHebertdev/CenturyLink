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

$("#button").click(function()(function ($) {
    $('button').on('click', function () {
        
        // add spinner to indicate something is happening
        $('<i class="fa fa-refresh fa-spin"/>').appendTo('#returninfohere');
 
        // get selected zip code from selectbox
        var username = $('#username').val();
 
        // make the AJAX request
        $.getJSON('https://api.github.com/users/' + username +'followers')};
                   };
