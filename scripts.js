// Write your JavaScript code here.
let move = 0;
let xMove = 0;
let yMove = 0;
let height = 10000;

function init (){
// Selector for takeoff
const takeOff = document.getElementById("takeoff");
const paragraph = document.getElementById("flightStatus")
const background = document.getElementById("shuttleBackground")
let shuttleHeight = document.getElementById("spaceShuttleHeight");

// Selector for Land button
const land = document.getElementById("landing");

// Selector for abortmission
const abort = document.getElementById("missionAbort");

// Selector for moves
const moveRight = document.getElementById("right");
const moveLeft = document.getElementById('left')
const moveUp = document.getElementById('up')
const moveDown = document.getElementById('down')
const rocket = document.getElementById('rocket')


// Function for takeoff
// takeOff.addEventListener('click', function(event){
//   let response = confirm("Are you ready to liftoff?")
//   if(response){
//       paragraph.innerHTML = "Shuttle in flight."
//       background.style.backgroundColor = 'skyblue';
//       shuttleHeight.innerHTML = 10000;
//   }
// })
// Function for landing
land.addEventListener("click", function(event){
    alert("The shuttle is landing. Landing gear engaged.");
    paragraph.innerHTML = "The shuttle has landed."
    background.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;
    rocket.style.transform = `translate(0, 0)`;
})

abort.addEventListener("click", function(event){
    let response = confirm("Are you sure you want to abort?");
    if(response){
        paragraph.innerHTML = "Mission aborted"
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.transform = `translate(0, 0)`;
    }
})

// Function for Moves
takeOff.addEventListener('click', function(event){
    let response = confirm("Are you ready to liftoff?")
    if(response){
        paragraph.innerHTML = "Shuttle in flight."
        background.style.backgroundColor = 'skyblue';
        shuttleHeight.innerHTML = 10000;

        moveRight.addEventListener("click", function(event){
            xMove += 10;
            yMove = yMove;
            rocket.style.transform = `translate(${xMove}px, ${yMove}px)`
        })

        moveLeft.addEventListener("click", function(event){
            xMove -= 10;
            yMove = yMove;
            rocket.style.transform = `translate(${xMove}px, ${yMove}px)`
        })

        moveUp.addEventListener("click", function(event){
            height += 10000;
            shuttleHeight.innerHTML = height;
            xMove;
            yMove -= 10;
            rocket.style.transform = `translate(${xMove}px, ${yMove}px)`
            background.style.height = height + 1
        });

        moveDown.addEventListener("click", function(event){
            height -= 10000;
            shuttleHeight.innerHTML = height;

            if(height>=10000){
                xMove;
                yMove += 10;
                rocket.style.transform = `translate(${xMove}px, ${yMove}px)`
            } else{
                alert('Cannot go down. Shuttle will crash!!!');
                height = 10000;
                shuttleHeight.innerHTML = 10000;
            }
        })

        }
        
    });

};

// Remember to pay attention to page loading!

window.onload = init;