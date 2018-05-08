// JavaScript
// Travis Barrett
// CIS 370 Final Project
// Mountain Race

var image = document.getElementById("redLight");
var eagle = document.getElementById("eagle");
var falcon = document.getElementById("falcon");
var winningBird = document.getElementById("winningBird");
winningBird.style.display = 'none';


// random number
    var number = Math.random() * 150;
    var number1 = Math.random() * 150;
    var raceStarted = false;

function turnGreen()
{
    image.src = "http://pixelartmaker.com/art/d53ff1aeae3e6be.png";
}

//Starts race and shoots birds at random intervals
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = ((Math.random() * 150)+5) + number;
        var newNumber1 = ((Math.random() * 150)+5) + number1;
        
        eagle.style.marginLeft = newNumber + 'px';
                
        falcon.style.marginLeft = newNumber1 + 'px';
        
        number = newNumber;
        number1 = newNumber1;
        
        
        
                var eagleDistance = eagle.style.marginLeft.slice(0, -4);
                var falconDistance = falcon.style.marginLeft.slice(0, -4);

      
        
        // winner of race
        var width = screen.width;
        
        if (eagleDistance >= width - 100)
        {
		document.getElementById("winningBird").src = "http://www.pngmart.com/files/1/Flying-Eagle-PNG-Pic.png";
        eagle.style.display = 'none';
        falcon.style.display = 'none';
        winningBird.style.display = 'list-item';
            
        }
        
     
        else if (falconDistance >= width - 200)
        {           
            document.getElementById("winningBird").src  = "http://webiconspng.com/wp-content/uploads/2017/09/Falcon-PNG-Image-94952.png";
            eagle.style.display = 'none';
        	falcon.style.display = 'none';
            winningBird.style.display = 'list-item';                
        }
        
        
        else
        {
            startRace();
        }       
    }, 750)       
}


//Puts birds back to start line for new race
function reset()
{
    image.src = "http://pixelartmaker.com/art/6508f549b984385.png";
    winningBird.style.display = 'none';
    eagle.style.display = 'initial';
    falcon.style.display = 'initial';
    eagle.style.marginLeft = 0;
    falcon.style.marginLeft = 0;
    eagleDistance = 0;
    falconDistance = 0;
    newNumber = 0;
    newNumber1 = 0;
    number = 0;
    number1 = 0;
}