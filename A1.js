/* JavaScript ExaMples, A1, EECS1012m Winter 2022 */

function problem1A(){
	var p = document.getElementById("mydata");
	
	var myArray = [];
	var arrayMax = 10;
	var limit = 100;
	for (var i = 0; i < arrayMax; i++) 
	  myArray.push(Math.floor(Math.random()*limit));
  
	p.innerHTML = myArray; /* print input array */
	
	var newArray=[];
	
	/* you implementation here */
	
	while(myArray.length != 0){
		var minIndex = 0;
		for(var i = 0; i<myArray.length; i++){
			if(myArray[i] <= myArray[minIndex]) minIndex = i;
		}
		
		newArray.push(myArray[minIndex]);
		myArray.splice(minIndex,1);
	}
	
	
	p.innerHTML = p.innerHTML + "<br>" + newArray;


}

 
function problem1B(){
	var p = document.getElementById("mydata");
	
	var myArray = [];
	var arrayMax = 10;
	var limit = 100;
	for (var i = 0; i < arrayMax; i++) 
	  myArray.push(Math.floor(Math.random()*limit));
  
	p.innerHTML = myArray; /* print input array */
  
  	/* you implementation here */

	var start = 0;
	while(start != myArray.length){
		minIndex = start;
		for(var i = start; i < myArray.length; i++){
			if(myArray[i] <= myArray[minIndex]) minIndex = i;
		}
		temp = myArray[minIndex];
		myArray[minIndex] = myArray[start];
		myArray[start] = temp;
		start++;
	}

	p.innerHTML = p.innerHTML + "<br>" + myArray;

}

function problem2(){

	var arr=[8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 330, 390, 400, 403, 407];
	
	/* you implementation here */
	/* prompt user for key with message "enter search key for .... "   see pdf  */
	var p = document.getElementById("mydata");
	key = prompt("enter search key for " + arr);
	
	var low = 0;
	var high = arr.length;
	found = false;

	for(var i = low; i < high; i++){
		middle = Math.floor((high + low)/2);

		if(arr[middle] == key){
			p.innerHTML = "key in arr: YES";
			found = true;
			break;
		} 

		else if(arr[middle] > key){
			high = middle - 1;

		}
		else if(arr[middle] < key){
			low = middle + 1;
		}

		
	}

	if(found == false){
		p.innerHTML = "key in arr: NO";
	}

	 
}


function problem3A(){  // assume same length
	/* you implementation here */
	/* prompt user for two strings    see pdf */
	var p = document.getElementById("mydata");
	var string1 = prompt("enter first string");
	var string2 = prompt("enter second string");
	sign = " = ";
	out = false;
	var i = 0;

	while(i < string1.length && out == false){
		if(string1[i] > string2[i]){
			sign = " > ";
			out = true;
		}

		else if(string1[i] < string2[i]){
			sign = " < ";
			out = true;
		}

		i++;
	}

	p.innerHTML = string1 + sign + string2;

	
}



function problem3B(){  // canbe any lengths
	/* you implementation here */
	/* prompt user for two strings */
	var p = document.getElementById("mydata");
	var string1 = prompt("enter first string");
	var string2 = prompt("enter second string");
	sign = " = ";
	out = false;
	var i = 0;
	var len;

	if(string1.length > string2.length) len = string2.length;
	else len = string1.length;

	while(i < len && out == false){
		if(string1[i] > string2[i]){
			sign = " > ";
			out = true;
		}

		else if(string1[i] < string2[i]){
			sign = " < ";
			out = true;
		}

		i++;
	}

	if(out == false){
		if(string1.length > string2.length) sign = " > ";
		else if(string2.length > string1.length) sign = " < ";
	}

	p.innerHTML = string1 + sign + string2;


	
}



