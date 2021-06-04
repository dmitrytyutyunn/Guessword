var TranslationDirection = 1;
var answer = 0;
var NumberOfPositiveAnswers = 0;
var NumberOfNegativeAnswers = 0;
var AnswerIsGiven = new Boolean(false);
var langCodes = ["en","de"];//,"el","be","es","fr","it","lt","nl","pl","sv"];
var langNames = ["Английский","Немецкий"];//,"Греческий","Белорусский","Испанский","Французский","Итальянский","Литовский","Голландский","Польский","Шведский"];
var pickedLanguage = 0;
var russian_words = ["и","в","не","он","на","я","что","тот","быть","с"];
var words = ["and","in","not","he","on","I","what","that","to be","with"];
var english_words = ["a","b","c","d","e","f","g","h","i","j"];
var german_words = ["a","b","c","d","e","f","g","h","i","j"];
var translations = ["пост","еда","старик","красота","нежность","вера","ключ"];

function readTextFile(file)
{  
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);  
  rawFile.onreadystatechange = function ()  
  {       
	 if(rawFile.readyState === 4)   
         {         if(rawFile.status === 200 || rawFile.status == 0) 
	           {              
			  var allText = rawFile.responseText;
		         // alert(allText);    
			  words = allText.split("\n");       
		   }
         } 
  } 
  rawFile.send(null);
}
 
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
                russian_words = content.split("\n");
            }
        
            reader.readAsText(file);	
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
	
	
    var scripts= document.getElementsByTagName('script');
    var path= scripts[scripts.length-1].src.split('?')[0];      // remove any ?query
    console.log(path.substring(0,path.length-10)+"russian_words.txt")

    readTextFile(path.substring(0,path.length-10)+"russian_words.txt");
    russian_words = words;

    readTextFile(path.substring(0,path.length-10)+"english_words.txt");
    english_words = words;

    readTextFile(path.substring(0,path.length-10)+"german_words.txt");
    german_words = words;

//    var reader = new FileReader();
//    reader.readAsText(path.substring(0,path.length-10)+"russian_words.txt");
//    var content = reader.result;
//    ozhegov = content.split("\n");

    document.getElementById("RussianToForeign").checked = 1;
    changeTranslationDirection();
    document.getElementById("difficulty").value = 500;
    difficultyLevel();
    clicknext();
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
		
    document.getElementById("button1").disabled = 0;
    document.getElementById("button2").disabled = 0;
    document.getElementById("button3").disabled = 0;
    document.getElementById("button4").disabled = 0;
    document.getElementById("button5").disabled = 0;
    document.getElementById("button6").disabled = 0;
    document.getElementById("button7").disabled = 0;

    document.getElementById("wrongchoices").checked = 0;
	
    langCodes = [];
    langNames = [];

    if(document.getElementById('english').checked){
        langCodes.push("en");
        langNames.push("Английский");
    }
    if(document.getElementById('german').checked){
        langCodes.push("de");
        langNames.push("Немецкий");
    }
    
    if(document.getElementById('whiterussian').checked){
        langCodes.push("be");
        langNames.push("Белорусский");
    }
    
    if(document.getElementById('french').checked){
        langCodes.push("fr");
        langNames.push("Французский");
    }
    
    if(document.getElementById('italian').checked){
        langCodes.push("it");
        langNames.push("Итальянский");
    }
    
    if(document.getElementById('greek').checked){
        langCodes.push("el");
        langNames.push("Греческий");
    }
    
    if(document.getElementById('litovian').checked){
        langCodes.push("lt");
        langNames.push("Литовский");
    }
    
    if(document.getElementById('swedish').checked){
        langCodes.push("sv");
        langNames.push("Шведский");
    }
    
    if(document.getElementById('norway').checked){
        langCodes.push("no");
        langNames.push("Норвежский");
    }

    if(document.getElementById('ukrainien').checked){
        langCodes.push("uk");
        langNames.push("Украинский");
    }

    if(document.getElementById('portugiese').checked){
        langCodes.push("pt");
        langNames.push("Португальский");
    }

    if(document.getElementById('finnish').checked){
        langCodes.push("fi");
        langNames.push("Финский");
    }

    if(document.getElementById('estonian').checked){
        langCodes.push("et");
        langNames.push("Эстонский");
    }

    if(document.getElementById('hollandish').checked){
        langCodes.push("nl");
        langNames.push("Голландский");
    }

    if(document.getElementById('dutch').checked){
        langCodes.push("da");
        langNames.push("Датский");
    }

    if(document.getElementById('austrian').checked){
        langCodes.push("cs");
        langNames.push("Чешский");
    }

    if(document.getElementById('polen').checked){
        langCodes.push("pl");
        langNames.push("Польский");
    }

    if(document.getElementById('makedonian').checked){
        langCodes.push("mk");
        langNames.push("Македонский");
    }

    if(document.getElementById('bolgarian').checked){
        langCodes.push("bg");
        langNames.push("Болгарский");
    }

    if(document.getElementById('islandish').checked){
        langCodes.push("is");
        langNames.push("Исландский");
    }

    if(document.getElementById('rumanian').checked){
        langCodes.push("ro");
        langNames.push("Румынский");
    }

    if(document.getElementById('chorvatian').checked){
        langCodes.push("hr");
        langNames.push("Хорватский");
    }

    if(document.getElementById('esperanto').checked){
        langCodes.push("eo");
        langNames.push("Эсперанто");
    }

    if(document.getElementById('spanish').checked){
        langCodes.push("es");
        langNames.push("Испанский");
    }

    console.log(langNames+langCodes);

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
	
        difficulty = document.getElementById("difficulty").value;    
        if(TranslationDirection==1)
        {
	    answer = Math.floor(Math.random()*7);
            var index_of_true_answer = 1;
	    var i = 0;
	    while(i<7){
		    //index = Math.floor(Math.random()*ozhegov.length);
                    index = Math.floor(Math.random()*difficulty);
                    if(i==answer){
                    	index_of_true_answer = index;
		    }
		    translations[i] = russian_words[index];
		    i++;
	    }
	   
	    document.getElementById("button1").innerText = translations[0];
            document.getElementById("button2").innerText = translations[1];
            document.getElementById("button3").innerText = translations[2];
            document.getElementById("button4").innerText = translations[3];
            document.getElementById("button5").innerText = translations[4];
            document.getElementById("button6").innerText = translations[5];
            document.getElementById("button7").innerText = translations[6];
		
	        //var russianWord = translations[answer];
		pickedLanguage = Math.floor(Math.random()*langCodes.length);
		//pickedLanguage = 0;
		//var queryToYandex = "https://translate.yandex.net/api/v1.5/tr/translate";
		//queryToYandex = queryToYandex + "?key=trnsl.1.1.20191110T113219Z.a27f93a787a423c7.4cfa3910ce62c9397fbbd42b19380575446b555c";
		//queryToYandex = queryToYandex + "&text="+russianWord;
		//queryToYandex = queryToYandex + "&lang=ru-"+langCodes[pickedLanguage];
	  
		//var request = new XMLHttpRequest();
		//request.open('GET',queryToYandex,false);
		//request.send();
		//var xmlDoc = request.responseXML;
		//var tagObj = xmlDoc.getElementsByTagName("text");
		//var word1 = tagObj[0].childNodes[0].nodeValue;
		if(pickedLanguage==0)
			word1 = english_words[index_of_true_answer];
		if(pickedLanguage==1)
		        word1 = german_words[index_of_true_answer];		

		document.getElementById("foreignword").innerText = word1;
    }
    else
    {
        answer = Math.floor(Math.random()*7);

        var i = 0;
        //var request = new XMLHttpRequest();
        var russianWord;

	    while(i<7){
		    //index = Math.floor(Math.random()*ozhegov.length);
            index = Math.floor(Math.random()*difficulty);
		    translations[i] = russian_words[index];
		    var russianWord = translations[i];
            console.log(russianWord);
            
		    pickedLanguageLocal = Math.floor(Math.random()*langCodes.length);

            if(i==answer)
            {
                word1 = translations[i];   
                pickedLanguage = pickedLanguageLocal;             
            }

		    //var queryToYandex = "https://translate.yandex.net/api/v1.5/tr/translate";
		    //queryToYandex = queryToYandex + "?key=trnsl.1.1.20191110T113219Z.a27f93a787a423c7.4cfa3910ce62c9397fbbd42b19380575446b555c";
		    //queryToYandex = queryToYandex + "&text="+russianWord;
		    //queryToYandex = queryToYandex + "&lang=ru-"+langCodes[pickedLanguageLocal]; 
		    //console.log(queryToYandex);
		    //request.open('GET',queryToYandex,false);
		    //request.send();
		    //var xmlDoc = request.responseXML;
		    //var tagObj = xmlDoc.getElementsByTagName("text");		    
                    //translations[i] = tagObj[0].childNodes[0].nodeValue;
		    //translations[i] = 
		    i++;
	    }
	   
	    document.getElementById("button1").innerText = translations[0];
            document.getElementById("button2").innerText = translations[1];
            document.getElementById("button3").innerText = translations[2];
            document.getElementById("button4").innerText = translations[3];
            document.getElementById("button5").innerText = translations[4];
            document.getElementById("button6").innerText = translations[5];
            document.getElementById("button7").innerText = translations[6];
	 	
	    document.getElementById("foreignword").innerText = word1;
    }
}

function changeTranslationDirection() {

    if(document.getElementById("RussianToForeign").checked)
    {
        TranslationDirection = 1;
        clicknext();
        console.log("Направление перевода: с русского на иностранный");
    }

    if(document.getElementById("ForeignToRussian").checked)
    {
        TranslationDirection = 2;
        clicknext();
        console.log("Направление перевода: с иностранного на русский");
    }
}

function disableWrongChoices() {
		if(document.getElementById("wrongchoices").checked)
		{
			var i=0;
			console.log("checked");
               	while(i<3){
	       			NumberOfDisabledButton = Math.floor(Math.random()*7);
                    console.log(NumberOfDisabledButton);
                    if(NumberOfDisabledButton!=answer){
				        switch(NumberOfDisabledButton){
					        case 0:
					            if(!document.getElementById("button1").disabled){
                                   			 document.getElementById("button1").disabled = true;
                           			         document.getElementById("button1").style.color = 'green';
                             				       i++;
                                			    continue;
                               				 }
							break;
						case 1:
							if(!document.getElementById("button2").disabled){
                                   				document.getElementById("button2").disabled = true;
                                  				document.getElementById("button2").style.color = 'green';
                                  				i++;
                                   				continue;
                              				  }
							break;
						case 2:
							if(!document.getElementById("button3").disabled){
                                 				 document.getElementById("button3").disabled = true;
                                 				 document.getElementById("button3").style.color = 'green';
                                 				 i++;
                                   				 continue;
                                			}
							break;
						case 3:
							if(!document.getElementById("button4").disabled){
                                			 	  document.getElementById("button4").disabled = true;
                                  				  document.getElementById("button4").style.color = 'green';
                                  				  i++;
                                   				  continue;
                               				 }
							break;
						case 4:
							if(!document.getElementById("button5").disabled){
                                 				  document.getElementById("button5").disabled = true;
                                  				  document.getElementById("button5").style.color = 'green';
                                  				  i++;
                                  				  continue;
                               				 }
							break;
						case 5:
							if(!document.getElementById("button6").disabled){
                               					  document.getElementById("button6").disabled = true;
                                 				  document.getElementById("button6").style.color = 'green';
                                  				  i++;
                                  				  continue;
                               				 }
							break;
						case 6:
							if(!document.getElementById("button7").disabled){
                                  				  document.getElementById("button7").disabled = true;
                                  				  document.getElementById("button7").style.color = 'green';
                                   				  i++;
                                   				  continue;   
                               				 }
							break;
                       			 }
				 }				
			}			
				
		}
}
