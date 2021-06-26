// ******************** script for having the play and pause button simultaneously on carousel *************************
     $(function() {
        $(".carousel").carousel( { interval: 2000, pause: "false" } );
        $("#carouselButton").click(function() {
            //if the class with id carouselButton has a child tag (i) and that child has a class fa-pause then perform the code below
            if($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause") ;  //pause the carousal using bootstrap jquery method .carousel("pause")//
                    $("#carouselButton").children("i").removeClass("fa-pause"); // remove the child class fa-pause - the removeClass method is Javascript
                    $("#carouselButton").children("i").addClass("fa-play"); //Add the class fa-play to the child of carousalButton id div
            }
            //if the class with id carouselButton has a child tag (i) and that child has a class fa-play then perform the code below
            else {
                $(".carousel").carousel("cycle"); //Bootstrap jQuery method carousel("cycle") to keep the carousel going
                $("#carouselButton").children("i").removeClass("fa-play"); //Remove the fa-play button class
                $("#carouselButton").children("i").addClass("fa-pause"); //Add fa-pause button class back again

            }
        });
        
     });

// ******************** activate the Reserve Campsite and Login modals when the corresponding button is clicked *************************
     $(function() {
        $("#reserveButton").click(function() {
            $("#reserveModal").modal("show");
        });        
     });

     $(function() {
         $("#loginButton").click(function() {
             $("#loginModal").modal("show");
         });
     });
