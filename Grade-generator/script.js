var gDom = document.getElementById("grades");
var aDom = document.getElementById("avg_grades");
var fDom = document.getElementById("final_grade");
var iDom = document.getElementById('yourgrades');

function outputData(g,a,f){

	gDom.innerHTML = g;
	aDom.innerHTML = a.toFixed(1);
	fDom.innerHTML = f;
}

function saveGradeAsCookie(grade,letter){


	console.log("Cookie would be saved");
	
}

function calculateGrade(allGrades){

	var totalGrade = 0;
	var avgGrade = 0;
	var finalGrades = ["A","B","C","D","E"];
	var finalGrade;

	for(var i = 0; i < allGrades.length; i++){
		totalGrade += parseInt(allGrades[i]);
		avgGrade = totalGrade / allGrades.length;
	}

	if(avgGrade >= 79){
		finalGrade = finalGrades[0];
		fDom.className = "green";
	} else if(avgGrade >= 60 && avgGrade < 79) {
		finalGrade = finalGrades[1];
		fDom.className = "teal";
	} else if(avgGrade >= 49 && avgGrade < 59) {
		finalGrade = finalGrades[2];
		fDom.className = "blue";
	} else if(avgGrade >= 40 && avgGrade < 49) {
		finalGrade = finalGrades[3];
		fDom.className = "orange";
	} else {
		finalGrade = finalGrades[4];
		fDom.className = "red";
	}

	outputData(allGrades, avgGrade, finalGrade);
	saveGradeAsCookie(avgGrade, finalGrade);

}

function parseData(input){

	var grades = input.split(",");
	grades = grades.sort(function(a,b){return b-a});
	calculateGrade(grades);

}

function submit(){

	if(iDom.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iDom.value);
	}

p00p}



var myInputData = new XMLHttpRequest();
myInputData.open("GET","mygrades.txt");

myInputData.onreadystatechange = function(){
	if(myInputData.readyState == 4){
		if(myInputData.status == 200){
			console.log(myInputData.responseText);
			parseData(myInputData.responseText);
		}
	}
};

myInputData.send();
