var answer = 0;
var NumberOfPositiveAnswers = 0;
var NumberOfNegativeAnswers = 0;
var AnswerIsGiven = new Boolean(false);
var langCodes = ["be","de","el","en","es","fr","it","lt","nl","pl","sv"];
var langNames = ["Беларусский","Немецкий","Греческий","Английский","Испанский","Французский","Итальянский","Литовский","Голландский","Польский","Шведский"];
var pickedLanguage = 10;
var ozhegov = ["я","йога","робот","свастика","мир","толстый","холод","стол","стул","лампа"];
var translations = ["пост","еда","старик","красота","нежность","вера","ключ"];
 
function oncreate(){

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*/;
    
        if (file.type.match(textType)) {
            var reader = new FileReader();
        
            reader.onload = function(e) {
                var content = reader.result;
                //Here the content has been read successfuly
                alert(content);
                ozhegov = content.split("\n");
            }
        
            reader.readAsText(file);	
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}
function makechoice(clicked){
	
	switch(clicked){
		case "button1":
		   if(answer == 0){
			   document.getElementById("button1").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			   if(!AnswerIsGiven){
				  NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		   } else{
			   document.getElementById("button1").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
		case "button2":
		   if(answer == 1){
			   document.getElementById("button2").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			    if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			    }
		   } else{
			   document.getElementById("button2").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
		case "button3":
		   if(answer == 2){
			   document.getElementById("button3").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
		       document.getElementById("language").innerText = langNames[pickedLanguage]; 
			   if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		    } else{
			   document.getElementById("button3").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   } 
		   }
		   break;
		case "button4":
		   if(answer == 3){
			   document.getElementById("button4").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			   if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		   } else{
			   document.getElementById("button4").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
		case "button5":
		   if(answer == 4){
			   document.getElementById("button5").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			   if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		   } else{
			   document.getElementById("button5").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
		case "button6":
		   if(answer == 5){
			   document.getElementById("button6").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			   if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		   } else{
			   document.getElementById("button6").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
		case "button7":
		   if(answer == 6){
			   document.getElementById("button7").style.color = 'blue';
			   document.getElementById("rightwrong").innerText = "верно";
			   document.getElementById("rightwrong").style.color = 'blue';
			   document.getElementById("language").innerText = langNames[pickedLanguage];
			   if(!AnswerIsGiven){
			      NumberOfPositiveAnswers++;
				  AnswerIsGiven = true;
			   }
		   } else{
			   document.getElementById("button7").style.color = 'red';
			   document.getElementById("rightwrong").innerText = "неверно";
			   document.getElementById("rightwrong").style.color = 'red';
			   if(!AnswerIsGiven){
			      NumberOfNegativeAnswers++;
				  AnswerIsGiven = true;
			   }
		   }
		   break;
	} 
	var percent = 100*NumberOfPositiveAnswers/(NumberOfPositiveAnswers+NumberOfNegativeAnswers);
	document.getElementById("counter").innerText = NumberOfPositiveAnswers+"+"+NumberOfNegativeAnswers+"-("+percent.toFixed(1)+"%)";
}

function clicknext(){
	
	document.getElementById("button1").style.color = 'black';
    document.getElementById("button2").style.color = 'black';
    document.getElementById("button3").style.color = 'black';
    document.getElementById("button4").style.color = 'black';
    document.getElementById("button5").style.color = 'black';
    document.getElementById("button6").style.color = 'black';
    document.getElementById("button7").style.color = 'black';
	
	document.getElementById("rightwrong").innerText = "верно/неверно";
    document.getElementById("rightwrong").style.color = 'black';
	document.getElementById("language").innerText = "Язык";
	AnswerIsGiven = false;
	
	var i = 0;
	while(i<7){
		index = Math.floor(Math.random()*ozhegov.length);
		translations[i] = ozhegov[index];
		i++;
	}
	   
		document.getElementById("button1").innerText = translations[0];
        document.getElementById("button2").innerText = translations[1];
        document.getElementById("button3").innerText = translations[2];
        document.getElementById("button4").innerText = translations[3];
        document.getElementById("button5").innerText = translations[4];
        document.getElementById("button6").innerText = translations[5];
        document.getElementById("button7").innerText = translations[6];
		
	    answer = Math.floor(Math.random()*7);
		var russianWord = translations[answer];
		pickedLanguage = Math.floor(Math.random()*11);
		var queryToYandex = "https://translate.yandex.net/api/v1.5/tr/translate";
		queryToYandex = queryToYandex + "?key=trnsl.1.1.20191110T113219Z.a27f93a787a423c7.4cfa3910ce62c9397fbbd42b19380575446b555c";
		queryToYandex = queryToYandex + "&text="+russianWord;
		queryToYandex = queryToYandex + "&lang=ru-"+langCodes[pickedLanguage];
	  
		var request = new XMLHttpRequest();
		request.open('GET',queryToYandex,false);
		request.send();
		var xmlDoc = request.responseXML;
		var tagObj = xmlDoc.getElementsByTagName("text");
		var word1 = tagObj[0].childNodes[0].nodeValue;
		document.getElementById("foreignword").innerText = word1;
}
