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



list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here
  const extractLetters = station.slice(0,3)
  const findSemiColon = station.indexOf(';');
  const extractName = station.slice(findSemiColon + 1)
  const result = `${extractLetters}: ${extractName}`;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
