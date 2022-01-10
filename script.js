window.history.back();
const quiz = [
	{
		id: 1,
		question: "JavaScript is which type of language?",
		ans: 2,
		your_ans: '',
		options: [
			"Object-Oriented",
			"Object-Based",
			"Assembly-language",
			"High-level",
		],
	},
	{
		id: 2,
		question: "Inside which HTML element do we put the JavaScript?",
		ans: 1,
		your_ans: '',
		options: ["< script >", "< javascript >", "< js >", "< scripting >"],
	},
	{
		id: 3,
		question: "JavaScript is _______ language.",
		ans: 2,
		your_ans: '',
		options: ["Application", "Scripting", "Programming", "None of These"],
	},
	{
		id: 4,
		question: "JavaScript is ______ Side Scripting Language.",
		ans: 3,
		your_ans: '',
		options: ["ISP", "Server", "Browser", "None of the above"],
	},
];

function showResult () {
	document.getElementById('container').style.display = 'none';

	document.write("<div class='result' style='display: grid; place-items: center;'>");

	for(var j = 0; j < noQuestion; j++){
		var x = quiz[j].ans - 1;
		var y = quiz[j].your_ans - 1;
	
		document.write("<h3>");
			document.write( (j+1) + "). " + quiz[j].question);
		document.write("</h3>");

		document.write("<h3>");
			document.write('Your Answer: ' + quiz[j].options[y] + " ");
			if (x!=y) {
				document.write("&#x2716;");
			}
			else {
				document.write("&#x2714;");
			}
		document.write("</h3>");

		document.write("<h3>");
			document.write('Answer: ' + quiz[j].options[x]);
		document.write("</h3>----------x----------");
	}

	document.write("<h3>");
		document.write("Result: " + res + "/" + noQuestion);
	document.write("</h3>");

	document.write("</div>");

}

function NextQuestion() {
	count = 0;
	for (var k = 0; k < 4; k++) {
		let options = k + "options";
		document.getElementById(options).style.backgroundColor = "white";
	}

	i += 1;

	if (i == noQuestion) {
		showResult();
	} else {
		//				state = false
		ShowQuestion(i);
	}
}

function ShowQuestion(i) {

	document.getElementById("next").style.display = 'none';
	document.getElementById("question").innerHTML = quiz[i].id + "). " + quiz[i].question;

	let q = "a";

	for (var j = 0; j < 4; j++) {
		let options = j + "options";

		document.getElementById(options).innerHTML = q + ". " + quiz[i].options[j];
		q = String.fromCharCode(q.charCodeAt(0) + 1); //increment to next alphabet
	}
}

function active(id) {
	var ans = parseInt(id) + 1;
	quiz[i].your_ans = ans;

	ans2 = ans;
	for (var j = 0; j < 4; j++) {
		let options = j + "options";
		document.getElementById(options).style.backgroundColor = "white";
	}
	document.getElementById(id).style.backgroundColor = "#03C03C";
	document.getElementById("next").style.display = 'block';
}

function CheckAns() {
	if (ans2 == quiz[i].ans) {
		count += 1;
		if (count == 1) {
			res += 1;
		}
	}
	NextQuestion();
}

let i = 0;
var count = 0;
var res = 0;
var ans2 = 0;
const noQuestion = quiz.length;

ShowQuestion(i);


