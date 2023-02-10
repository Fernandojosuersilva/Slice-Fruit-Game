var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple', 'banana', 'grape', 'lemon', 'mango', 'orange', 'pineapple', 'strawberry', 'watermelon'];

$(function () {
"use strict";
// click start/reset button
$("#startreset").click(function () {
//we are playing
if (playing == true) {
   //reload the page

   location.reload();

   } else {

       //we are not playing
        playing = true;


        score = 0;//set score to 0
        $("#scoreValue").html(score);

       //show trial left box
        $("#trialsLeft").show();
        trialsLeft = 3;
        addHearts();

       $("#gameOver").hide();

        //change the button text to RESET GAME
       $("#startreset").html("Reset Game");

       //start sending fruits

       startAction();

    }
});

//slice fruits
$("#fruits1").mouseover(function(){
score++;
// updated score
$("#scoreValue").html(score);
    //play sound
$("#slicesound")[0].play();
//stop fruit 
    clearInterval(action);
    
//hide fruit
    
    $("#fruits1").hide("explode", 500);
    
//send new fruit
    setTimeout(startAction, 800);
});
});  


// play sound background
// explode fruit

function addHearts() {
    $("#trialsLeft").empty();
for (i = 0; i < trialsLeft; i++) {

    $("#trialsLeft").append('<img src="images/heart.png" class="life">');
}
}
//generates a fruit
function startAction() {
$("#fruits1").show();
chooseFruits(); //choose a random fruit
$("#fruits1").css({'left' : Math.round(550 * Math.random()), 'top' : -50}); //random position

// generate a random step 
step = 1 + Math.round(5 * Math.random()); //change step

// move fruit down by one step every 10ms
action = setInterval(function() {
    //move the fruit by one step
    $("#fruits1").css('top', $("#fruits1").position().top + step);

    //check if the fruit is too low
    if ($("#fruits1").position().top > $("#fruitsContainer").height()) {

        //check if have any trials left

        if (trialsLeft > 1) {

            //generate a fruit
            $("#fruits1").show();
            chooseFruits(); //choose a random fruit
            $("#fruits1").css({'left' : Math.round(550 *Math.random()), 'top' : -50}); //random position

            // generate a random step 
            step = 1+ Math.round(5*Math.random()); //change step

                //reduce trials by one
                trialsLeft --;
                //populate trials left box
                addHearts();

            } else {

                //game over

                playing = false; //no longer playing

               $("#startreset").html("Start Game");
               $("#gameOver").show();
               $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
               stopAction();
           }

       }
}, 10);
}


// generate random fruit

function chooseFruits() {
$("#fruits1").attr('src' , 'images/' +  fruits[Math.round(8*Math.random())] + '.png');
}
function stopAction() {
clearInterval(action);
$("#fruits1").hide();
}
