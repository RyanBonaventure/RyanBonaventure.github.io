var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree 
      var treee
      var building1 
      var building2
      var building3
      var building4
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'cyan');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
         

            // field
            
            var field = draw.bitmap("img/field.png");
            field.x = 0;
            field.y = 0;
            field.scaleX = 3.8;
            field.scaleY = 4.1;
            background.addChild(field);
            //barn
            var barn = draw.bitmap("img/barn.png");
            barn.x = 775;
            barn.y = 75;
            barn.scaleX = 1.5;
            barn.scaleY = 1.5;
            background.addChild(barn);

            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            building1 =
             draw.bitmap("img/grian.png");
             building1.x = 100;
             building1.y = 80;
             building1.scaleX = 1;
             building1.scaleY = 1; 
             background.addChild(building1);

             // brain 
var brain 
            brain =
             draw.bitmap("img/brin-removebg-preview.png");
             brain.x = 780;
             brain.y = 220;
             brain.scaleX = 0.05;
             brain.scaleY = 0.05; 
             background.addChild(brain);

            
            // TODO 3: Part 1 - Add a tree
             tree =
             draw.bitmap("img/cowstand.png");
             tree.x = 1200;
             tree.y = 350;
             tree.scaleX = .8;
             tree.scaleY = .8;
             background.addChild(tree);
             //TREE 2
             treee =
             draw.bitmap("img/cow1.png");
             treee.x = -300;
             treee.y = 380;
             treee.scaleX = 1.5;
             treee.scaleY = 1.5;
             background.addChild(treee);

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 1.5;
            if (tree.x < -400) {
            tree.x = canvasWidth;
}           //cow
            treee.x = treee.x + 1;
            if (treee.x > 1400) {
            treee.x = -300;
}
            
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
