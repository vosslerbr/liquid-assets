// takes an argument with single word corresponding to section title
// clicked i.e. 'breakfast' if breakfast section title is clicked
function showHide(id) {
  // set sectionName to passed in string + '-content'
  // to make 'arg-content'
  let sectionName = id + '-content';

  // set sectionToShow to represent the 'arg-content' div that
  // corresponds to section title clicked
  let sectionToShow = document.getElementById(sectionName);

  // simple if statement to display or hide 'arg-content'
  if (sectionToShow.style.maxHeight === '1000px') {
    sectionToShow.style.maxHeight = '0';
  } else {
    sectionToShow.style.maxHeight = '1000px';
  }
}
