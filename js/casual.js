

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

var typed1 = new Typed("#poem", {
	strings: ["I love the world of conundrums, <br/> And shun all things humdrum; <br/> Conundrums in any form, such as,<br/>Puzzles, problems, riddles or enigmas;<br/>My favorite author is Agatha Christie,<br/>You guessed it right, I do love mystery;<br/>I am of humor a storehouse,<br/>Which explains my love for P.G. Wodehouse;<br/>The game of chess I love to play,<br/>Strategize to checkmate and to slay;<br/>By now, I’m sure you can see,<br/>Another one of my hobbies is to write poetry,<br/>And with the means of a poem, and this might sound bizarre,<br/>I’d like you meet my 'casual avatar'."],
    typeSpeed: 25,
    startDelay: 750,
    loop: false
  });

console.log("TYPED:");
console.log(typed);