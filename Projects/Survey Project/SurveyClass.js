function Survey(answers){
	this.answers=answers;
};

Survey.prototype.constructor=function(){
	var inventory=[];
	var str = JSON.stringify(inventory);
	localStorage.setItem("Inv",str);
};

Survey.prototype.store=function(Inventory){
	var url = document.location.href;
	var $_GET = getForm(url);
	var str = localStorage.getItem(Inventory);
	var inventory = JSON.parse(str);
	var number = inventory.length;
	inventory[number]=$_GET;

	var str = JSON.stringify(inventory);
	localStorage.setItem(Inventory,str);
};

Survey.prototype.display=function(){
	var str = localStorage.getItem("Inv");
	var inventory = JSON.parse(str);
	for(var i=0;i<inventory.length;i++){
		document.write("Result ---->"+(i+1) + "<br>");
		var obj = inventory[i];
		for(var prop in obj){
			document.write(prop+"="+obj[prop]+"<br>");
		}
	}
};