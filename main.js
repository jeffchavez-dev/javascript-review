/**
  Be sure to uncomment the items under each step below the editable section. Be sure to comment out the entire last step. If your code fails to run, or you see a "ReferenceError" in the console, make sure you have completed all of the objectives 
  
  Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  
  
	Step 1:
	 Take a look at this code and try to predict what it's going to do before running it...
	
	After making your guess, press 'run' at the top and take a look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.
	



	Step 2:
	Once you have a good handle on the code snippet, delete the code then follow the following instructions between the lines and try to recreate the snippet on your own.
	
	---------------------------------------------------------------
	
	4 variables: first name, last name, current year, and birth year.
	a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
	print the greeting with console.log
	
	---------------------------------------------------------------
	
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works!

	Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)

	Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting.
	
	===== NOTE ====
	In order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  If the tests fail, check spacing and punctuation:
	
	birthYear = 1948
	thisYear = 1965
	firstName = Carlos
	lastName = Stevenson

	The greeting should say "Hello! My name is Carlos Stevenson and I am 17 years old."
*/

// Edit below this line =============
// const birthYear = 1948;
// const thisYear = 1965;
// const firstName = "Carlos";
// const lastName = "Stevenson";
// const fullName = firstName + " " + lastName;
// const age = thisYear - birthYear;

// const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

// console.log(greeting);











/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

// function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;

// 	// Edit between these lines
// 	// =================================
// 	result = a + b;

// 	// =================================

// 	return result;
// }

// console.log(troubleshooting())

/**
 * EXERCISE # 2
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

// number = Number(prompt("enter a number"));

// function numberChecker() {
// 	if(number >= 10 ) {
// 		return true;10
// 	} else {
// 		return false;
// 	}
// }

// console.log(numberChecker)



// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (const city of cities) {
//   // write your code just below here
//   const lowerCase = city.toLowerCase();	
//   const firstLetter = lowerCase[0];
//   const newFirstLetter = lowerCase.replace(lowerCase[0],firstLetter.toUpperCase());	
//   const result = newFirstLetter;
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }



// list.innerHTML = '';
// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (const station of stations) {
//   // write your code just below here
//   const extractLetters = station.slice(0,3)
//   const findSemiColon = station.indexOf(';');
//   const extractName = station.slice(findSemiColon + 1)
//   const result = `${extractLetters}: ${extractName}`;
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }
