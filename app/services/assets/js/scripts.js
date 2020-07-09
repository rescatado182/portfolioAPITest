jQuery( function($) {
    
    function getTweets() {
   
        $.getJSON( "twitter.php", function( data ) {
            
            var items = [];
            $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'><h6>" +  val.user.screen_name + "</h6>"
                        + "<p>" + val.text + "</p>"
                        + "<span>" + val.created_at +  "</span>"    
                        + "</li>" );
            });

            
        
            $( "<ul/>", {
            "class": "social-list",
            html: items.join( "" )
            }).appendTo( "#tweetsList" );
        });
    }


    function getProfile() {
   
        $.getJSON( "http://localhost:8080/profile/1", function( data ) {

            if( data.twitter_user_name !== null ) {
                $("#twitterUsername").html(
                    "<p>" + data.twitter_user_name + "</p>"
                );
            }

            if( data.title !== null ) {
                $("#username").html(
                    "<p>" + data.title + "</p>"
                );

                $("#title").html(data.title);
            }

            if( data.description !== null ) {
                $("#desciption").html(
                    "<p>" + data.description + "</p>"
                );
            }

            if( data.image_url !== null ) {
                $(".avatar").attr("src", data.image_url);
            }

            
                
            
        });
    }


    // Init 
    getProfile();

    getTweets();


})