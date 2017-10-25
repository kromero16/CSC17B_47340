/*

*/

//create survey object
var SurveyInfo = {
	questions:[],
	survTitle:[],
	answers:[],
};

//Mutators
SurveyInfo.addQuestion=function(qstn){
	this.questions.push(qstn);
};

SurveyInfo.addTitle=function(title){
	this.survTitle.push(title);
};

SurveyInfo.addAnswer=function(answer){
	this.answers.push(answer);
};


//Accessors
SurveyInfo.getQuestion=function(index){
	return this.questions[index];
};

SurveyInfo.getTitle=function(index){
	return this.survTitle[index];
};

SurveyInfo.getAnswer=function(row,col){
	return this.answers[row][col];
};


//Print Functions
SurveyInfo.prntQuestions=function(){
	for(var i=0;i<this.questions.length;i++){
		document.write(this.questions[i]+"<br>");
	}
};

SurveyInfo.prntTitles=function(){
	for(var i=0;i<this.survTitle.length;i++){
		document.write(this.survTitle[i]+"<br>");
	}
};

SurveyInfo.prntAnswers=function(){
	for(var i=0;i<this.answers.length;i++){
		document.write(this.answers[i]+"<br>");
	}
};

//Fill Survey with info
SurveyInfo.addTitle("Student Survey");
SurveyInfo.addQuestion("What OS are you using?");
SurveyInfo.addQuestion("What field is your major in?");
SurveyInfo.addQuestion("What is your favorite programming language?");
SurveyInfo.addQuestion("What is your preferred IDE?");
SurveyInfo.addQuestion("What school would you like to transfer too?");
SurveyInfo.addAnswer(["Linux","Windows","Mac","Other"]);
SurveyInfo.addAnswer(["Computer Science","Life Science","Social Science","Other"]);
SurveyInfo.addAnswer(["cpp","Javascript","Java","Other"]);
SurveyInfo.addAnswer(["Netbeans","Qt","Eclipse","Other"]);
SurveyInfo.addAnswer(["cal state","UC","private","out of state"]);

