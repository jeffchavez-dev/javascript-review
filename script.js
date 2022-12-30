const list = document.querySelector('.output ul');
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

const allVocabularies = {
    "lesson-one": [
      {greek : "ἀγάπη, ἡ", gloss: "love"},
      {greek : "γῆ ἡ" , gloss: "earth, land, ground (geology)"},
      {greek : "ζωή ἡ", gloss: "life (zoo, zoology)"},
      {greek : "φωνή, ἡ ", gloss: "voice, sound (phonetics, phonograph, phone)"},
      {greek : "ἀλήθεια, ἡ", gloss: "truth"},
      {greek : "ἁμαρτία, ἡ", gloss:  "sin (hamartiology—the theological study of sin)"},
      {greek : "βασιλεία, ἡ" , gloss: "kingdom, reign (basilica)"},
      {greek : "δόξα, ἡ" , gloss: "glory, majesty (doxology)"},
      {greek : "ἐκκλησία, ἡ" , gloss: "congregation, assembly, church (ecclesiastical)"},
      {greek : "ἡμέρα, ἡ" , gloss: "day (ephemeral, “for a day”)"},
      {greek : "καρδία, ἡ", gloss:  "heart (cardiologist)"},
      {greek : "δέ" , gloss: "and, but, now"},
      {greek : "καί" , gloss: "and, even, also"},
      {greek : "μέν" , gloss: "on the one hand, indeed"},
      {greek : "ὁ, ἡ, τό" , gloss: "the"}
    ], 
  "lesson-two": [
    {greek :"ἀδελφός, ὁ ", gloss: "brother (and sister) "},
    {greek :"ἄνθρωπος, ὁ ", gloss: "man, human being, husband (anthropology)"},
    {greek :"θεός, ὁ ", gloss: "God (theology)"},
     {greek :"κόσμος, ὁ ", gloss: "world, universe; adornment (cosmos, cosmology, cosmetics)"},
     {greek :"κύριος, ὁ ", gloss: "Lord, master, sir"},
    {greek :"λόγος, ὁ ", gloss: "word, message, account (logic, theology,psychology)"},
    {greek :"νόμος, ὁ ", gloss: "law, principle (theonomists)"},
    {greek :"οὐρανός, ὁ", gloss: " heaven, sky (Uranus)"},
    {greek :"υἱός, ὁ ", gloss: "son, descendant"},
    {greek :"Χριστός, ὁ ", gloss: "Christ, Messiah, Anointed One (Christ)"},
    {greek :"ἔργον, τό", gloss: "work, deed (ergonomic)"},
    {greek :"εὐαγγέλιον, τό ", gloss: "good news, gospel (evangelistic, evangelical)"},
    {greek :"ἱερόν, τό ", gloss: "temple, sanctuary"},
     {greek :"σημεἱον, τό ", gloss: "sign (semiotics)"},
    {greek :"τέκνον, τό", gloss: " child, son, descendant"}
  ]
}
// console.log(allVocabularies.Object.keys(1))

const getVocabularyLesson = Object.keys(allVocabularies)
console.log(getVocabularyLesson)
const lessonEl = document.querySelector(".lesson")
const isLessonChecked = lessonEl.querySelectorAll('input[type="checkbox"]')
// TO DO:
// 1. User clicked the checkbox
// 2. Get the value of the checkbox
// 3. Get the lesson object of vocabulary that matches the value of the checked checkboxes
// 4. Add the lesson array to the vocabulary array to be reviewed 
// 5. Create a div and display the selected value
// isLessonChecked.addEventListener('click', getLesson)
let vocabularyToReview = [];
function getLesson() {
  

  isLessonChecked.forEach(lessonChecked => { //loop through each of the checkboxes
    if(lessonChecked.checked) {
      const review = document.createElement("div")
      review.innerHTML = `${lessonChecked.value}`;
      review.classList.add('lesson-added');
      toReview.appendChild(review);
    }
  })
}


/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}

console.log(troubleshooting())

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

/**
 * EXERCISE # 3 - Foundations 
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */


const a = "+"
const b = "*"
const c = "%"
const d = "-"
const e = "+"

if(a === 9) {
	console.log("'a' is correct!")
} else {
	console.log(`'a' is incorrect, got ${a}, expected 9`)
}
console.log("\n");

if(b === 66) {
	console.log("'b' is correct!")
} else {
	console.log(`'b' is incorrect, got ${b}, expected 66`)
}
console.log("\n");

if(c === 1) {
	console.log("'c' is correct!")
} else {
	console.log(`'c' is incorrect, got ${c}, expected 1`)
}
console.log("\n");

if(d === -8) {
	console.log("'d' is correct!")
} else {
	console.log(`'d' is incorrect, got ${d}, expected -8`)
}
console.log("\n");

if(e === 68) {
	console.log("'e' is correct!")
	console.log("\n Congrats! You've solved them all, you may move onto the next lesson")
} else {
	console.log(`'e' is incorrect, got ${e}, expected 68`)
}


