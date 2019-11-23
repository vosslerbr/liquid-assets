// takes an argument with single word corresponding to section title
// clicked i.e. 'breakfast' if breakfast section title is clicked
function showHide(id) {
  // set sectionName to passed in string + '-content'
  // to make 'arg-content'
  let sectionName = id + '-content';
  let sectionArrow = id + '-arrow';

  // set sectionToShow to represent the 'arg-content' div that
  // corresponds to section title clicked
  let sectionToShow = document.getElementById(sectionName);
  let arrowToRotate = document.getElementById(sectionArrow);

  // simple if statement to display or hide 'arg-content'
  if (sectionToShow.style.maxHeight === '2000px') {
    sectionToShow.style.maxHeight = '0';
    arrowToRotate.style.transform = 'rotate(360deg)';
  } else {
    sectionToShow.style.maxHeight = '2000px';
    arrowToRotate.style.transform = 'rotate(180deg) translateX(10px) translateY(-3px)';
  }
}

addEventListener('scroll', function(e) {
  console.log(window.pageYOffset / 500);
  const scroll = window.pageYOffset;
  const nav = document.getElementById('nav');
  nav.style.backgroundColor = 'rgba(70, 8, 116, ' + scroll / 100 + ')';
});
