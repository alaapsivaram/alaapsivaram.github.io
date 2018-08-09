

var options = {
  strings: ["Problem Solver", "Soccer Enthusiast", "Chess Player", "Sports Fan"],
  typeSpeed: 30
}

// var typed = new Typed("#typed_test", options);
var typed = new Typed("#typed_test", {
	strings: ["I'm a Problem Solver", "I'm a Soccer Enthusiast", "I'm a Chess Player", "I'm a Sports Fan", "I'm an avid reader", "I'm a poet"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 750,
    startDelay: 750,
    smartBackspace: true,
    loop: true
  });
console.log("TYPED:");
console.log(typed);