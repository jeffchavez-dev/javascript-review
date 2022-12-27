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

const iterator = Object.keys(allVocabularies)
console.log(iterator)
const lessonEl = document.querySelector(".lesson")
const isLessonChecked = lessonEl.querySelectorAll('input[type="checkbox"]')
// TO DO:
// 1. User clicked the checkbox
// 2. Get the value of the checkbox
// 3. Get the lesson object of vocabulary that matches the value of the checked checkboxes
// 4. Add the lesson array to the vocabulary array to be reviewed 
// 5. Create a div and display the selected value
// isLessonChecked.addEventListener('click', getLesson)

function getLesson() {
  let vocabularyToReview = [];

  isLessonChecked.forEach(lessonChecked => { //loop through each of the checkboxes
    if(lessonChecked.checked) {
      const review = document.createElement("div")
      review.innerHTML = `${lessonChecked.value}`;
      review.classList.add('lesson-added');
      toReview.appendChild(review);
    }
  })
}
