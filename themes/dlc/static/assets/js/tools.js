// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.filters-group');
var emptyContainer = document.getElementById('noResultsContainer');
filtersElem.addEventListener( 'change', function( event ) {
  // only work with buttons
  // var checkboxes = event.target;
  if ( !matchesSelector( event.target, 'input' ) ) {
    return;
  }
  
  var checked = filtersElem.querySelectorAll('input[type=radio]:checked');

  var filters = [];
  for (var i =  0; i < checked.length; i++) {
    filters.push(checked[i].value)
  }

  console.log(iso);
  
  filterValue = concatValues(filters);
  iso.arrange({ filter: filterValue });

  if (iso.element.offsetHeight === 0) {
    emptyContainer.classList.remove('visually-hidden');
  }
  else {
    emptyContainer.classList.add('visually-hidden');
  }
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

function uncheckAll(divid) {
  var checks = document.querySelectorAll('#' + divid + ' input[type="radio"]');

  for (var i =0; i< checks.length;i++) {
    var check = checks[i];
    if(!check.disabled){
      check.checked = false;
    }
  }

  var checked = filtersElem.querySelectorAll('input[type=radio]:checked');

  var filters = [];
  for (var i =  0; i < checked.length; i++) {
    filters.push(checked[i].value)
  }
  
  filterValue = concatValues(filters);
  iso.arrange({ filter: filterValue });

  if (iso.element.offsetHeight === 0) {
    emptyContainer.classList.remove('visually-hidden');
  }
  else {
    emptyContainer.classList.add('visually-hidden');
  }
}
