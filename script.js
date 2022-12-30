

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


