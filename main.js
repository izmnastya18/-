	 //функция, которая перемешивает массив
	 function mix(mixArray) {
		let index, valueIndex; 
		for (let i=0; i<=mixArray.length-1; i++) {
		  index = Math.floor(Math.random()*i);
		  valueIndex = mixArray[index];
		  mixArray[index] = mixArray[i];
		  mixArray[i] = valueIndex;
		}
		return mixArray;
	  }
  
  //Массив вопросов и ответа
	let dataArray = [
	["HELLO","Привет","Пока","Море","Бегать",1],
	["MILK","Как дела?","Молоко","Твой","Деньги",2],
	["DOG","Собака","Кошка","Лошадь","Сарделька",1],
	["СAT","Цветок","Лес","Огонь","Кот",4],
	["TREE","Три","Думать","Дуб","Дерево",4],
	["RED","Стена","Красный","Башня","Война",2],
	["COMPUTER","Стол","Компьютер","Солнце","Мир",2]
  ];
  
mix(dataArray); //перемешиваем массив

	let count = 0;
	let timeQuestions = 0;
	let currentAnswer = 0;
	let countAnswer = dataArray.length;
    let options = document.querySelectorAll('[name=option]');
    

	function sec() {
		time++;	
		document.getElementById('time').innerHTML='Затрачено времени: ' + timeQuestions + ' сек';
	}

	function check(num){
		if(num == 0){ 
            for(let i=0; i<options.length; i++){
                options[i].style.display='block';
            }
            for(let i=0; i<options.length; i++){
                options[i].innerHTML=dataArray[currentAnswer][i];;
            }
			
			document.getElementById('question').innerHTML=document.getElementById('question').innerHTML=dataArray[currentAnswer][0] +  (currentAnswer+1) + '/' + countAnswer;
            
            document.getElementById('start').style.display='none';
		
			let intervalID = setInterval(sec, 1000);
			
		}else{

			if( num ==  dataArray[currentAnswer][5]){
				count++;
				document.getElementById('result').innerHTML='Верно!';
			}else{
				document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + dataArray[currentAnswer][dataArray[currentAnswer][5]];
			}
				
			currentAnswer++;
			if(currentAnswer < countAnswer){
                for(let i=0; i<options.length; i++){
                    options[i].innerHTML=dataArray[currentAnswer][i];;
                }
				document.getElementById('question').innerHTML=dataArray[currentAnswer][0]  + (currentAnswer+1) + '/' + countAnswer;;
				
			}else{
				document.getElementById('end').style.display='inline';
                document.getElementById('time').id = 'stop';
                for(let i=0; i<options.length; i++){
                    options[i].style.display='none';
                }
				document.getElementById('question').style.display='none';
				document.getElementById('end').style.display='inline';
				
				let percent =  Math.round(count/countAnswer*100);				
				let rezult = 'Плохо!';
				if(percent>70) rezult = 'Хорошо!';
				if(percent==100) rezult = 'Отлично!';
				
				document.getElementById('result').innerHTML='Правильных ответов: ' + count + ' из ' + countAnswer +  (' + percent + '%)  + rezult;
			}
		}
	}
