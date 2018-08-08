

var options = {
  strings: ["Problem Solver", "Soccer Enthusiast", "Chess Player", "Sports Fan"],
  typeSpeed: 30
}

// var typed = new Typed("#typed_test", options);
var typed = new Typed("#typed_test", {
	strings: ["Problem Solver", "Soccer Enthusiast", "Chess Player", "Sports Fan"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 750,
    startDelay: 750,
    loop: true
  });
console.log("TYPED:");
console.log(typed);