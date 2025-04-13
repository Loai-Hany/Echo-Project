$(document).ready(function () {
    $("#gifloader img").fadeOut(1000 , function () {
        $("#gifloader").slideUp(1000);
    });
});


$("#dropDown").click(function () {
    $("#secondry-menu").slideToggle(500);
})

//////////////////////////////////////////////////////////////////

let nums = document.querySelectorAll("#num");

// let section = document.getElementById("sectionNums");
// let started = false;

// window.onscroll = function () {
//     if(window.scrollY >= section.offsetTop) {
//         if(!started) {
//            nums.forEach((num) => startCount(num));
//         }
//         started = true;
//     }
// };

nums.forEach((num) => startCount(num));

function startCount (el) {

    let goal = el.dataset.goal;
    let count = setInterval( () => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 60);
}

//////////////////////////////////////////////////////////////////

let xhead = document.getElementById("xhead");
let yhead = document.getElementById("yhead");
let zhead = document.getElementById("zhead");

let xi = document.getElementById("xi");
let yi = document.getElementById("yi");
let zi = document.getElementById("zi");

let checkOne = false;
let CheckTwo = false;
let CheckThree = false;


$("#xhead").click(function () {
    checkOne = true;
    $("#xpar").slideDown(500 , function () {
        xhead.classList.add("activer");
        xi.className = "fa fa-minus";
    });
});

xhead.addEventListener ("click" , function () {
if (checkOne) {
    $("#xhead").click(function () {
        checkOne = false;
        $("#xpar").slideUp(500 , function () {
            xhead.classList.remove("activer");
            xi.className = "fa fa-plus";
        });
        
    });
  }

});


$("#yhead").click(function () {
    CheckTwo = true;
    $("#ypar").slideDown(500 , function () {
        yhead.classList.add("activer");
        yi.className = "fa fa-minus";
    });
});

yhead.addEventListener ("click" , function () {
if (CheckTwo) {
    $("#yhead").click(function () {
        CheckTwo = false;
        $("#ypar").slideUp(500 , function () {
            yhead.classList.remove("activer");
            yi.className = "fa fa-plus";
        });
        
    });
  }

});

$("#zhead").click(function () {
    CheckThree = true;
    $("#zpar").slideDown(500 , function () {
        zhead.classList.add("activer");
        zi.className = "fa fa-minus";
    });
});

zhead.addEventListener ("click" , function () {
if (CheckThree) {
    $("#zhead").click(function () {
        CheckThree = false;
        $("#zpar").slideUp(500 , function () {
            zhead.classList.remove("activer");
            zi.className = "fa fa-plus";
        });
        
    });
  }

});







//////////////////////////////////////////////////////////////////

