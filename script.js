let i = 0;
let questions = [];
let options = [];
let noQuestion;
let ans = [];
let uans = [];
let res = 0
let z = 0;

for (var x = 0; x < 4; x++) {
  options[x] = [];
}

let fetchRes = fetch("https://sheet.best/api/sheets/0e4e0003-d1b2-4c21-ad07-77457d7e5727");
fetchRes.then(res =>
    res.json()).then(op => {
		noQuestion = op.length
    	for (var j = 0; j < noQuestion; j++) {
    		ans[j] = op[j].answer;
    		questions[j] = op[j].question;
			options[j][0] = op[j].option1;
			options[j][1] = op[j].option2;
			options[j][2] = op[j].option3;
			options[j][3] = op[j].option4;
    	}
    	ShowQuestion(i)
})


function showResult() {
	document.getElementById('container').style.display = 'none';

	document.write("<div class='result' style='display: grid; place-items: center;'>");

	for (var j = 0; j < noQuestion; j++) {

		let urAns = uans[j]-1;
		let crtAns = ans[j]-1;

		document.write("<h3>");
		document.write((j + 1) + "). " + questions[j]);
		document.write("</h3>");

		document.write("<h3>");
		document.write('Your Answer: ' + options[j][urAns] + " ");
		if (crtAns != urAns) {
			document.write("✖");
		} else {
			document.write("✔");
		}
		document.write("</h3>");
		
		document.write("<h3>");
		document.write('Correct Answer: ' + options[z][crtAns]);
		document.write("</h3>----------x----------");
		z++;
	}

	document.write("<h1>");
	document.write("Result: " + res + "/" + noQuestion);
	document.write("</h1>");

	document.write("</div>");
	
}

function NextQuestion() {
	for (var k = 0; k < 4; k++) {
		let options = k + "options";
		document.getElementById(options).style.backgroundColor = "white";
	}

	i += 1;

	if (i == noQuestion) {
		showResult();
	} else {
		ShowQuestion(i);
	}
}

function ShowQuestion(i) {

	document.getElementById("next").style.display = 'none';

	document.getElementById("question").innerHTML = i+1 + "). " + questions[i];

	let q = "a";

	for (var j = 0; j < 4; j++) {
		let id = j + "options";

		document.getElementById(id).innerHTML = q + ". " + options[i][j];
		q = String.fromCharCode(q.charCodeAt(0) + 1); //increment to next alphabet
	}
}


function active(id) {
	uans[i] = parseInt(id) + 1;

	for (var j = 0; j < 4; j++) {
		let options = j + "options";
		document.getElementById(options).style.backgroundColor = "white";
	}
	document.getElementById(id).style.backgroundColor = "#03C03C";
	document.getElementById("next").style.display = 'block';
}


function CheckAns() {
	if (uans[i] == ans[i]) {
		res += 1;
	}

	NextQuestion();
}





