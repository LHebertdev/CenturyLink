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
        $.getJSON('https://api.github.com/users/' + username +'followers', function (data) {
 
            // do all this on success       
            var items = [],
                $ul;
 
            $.each(data, function (key, val) {
                //iterate through the returned data and build a list
                items.push('<li id="' + key + '"> $username </li>');
            });
            // if no items were returned then add a message to that effect
            if (items.length < 1) {
                items.push('<li>No results for this ZIP code, try again!</li>');
            }
 
            // remove spinner
            $('.fa-spin').remove();
 
            // append list to page
            $ul = $('<ul />').appendTo('#returninfohere');
 
            //append list items to list
            $ul.append(items);
        });
    });
}(jQuery));
 ;
                   };
