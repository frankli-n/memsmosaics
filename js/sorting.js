var ascending = false;

$('.tab-content').on('click', '.sortByPrice', function() {

  var sorted = $('.product').sort(function(a, b) {
    return (ascending ==
      (convertToNumber($(a).find('.price').html()) <
        convertToNumber($(b).find('.price').html()))) ? 1 : -1;
  });
  if(ascending){
    ascending = false;
    $(".sortByPrice").html("Sort by Price: descending");
  }else{
    ascending = true;
    $(".sortByPrice").html("Sort by Price: ascending");
  }

  $('.results').html(sorted);
});

var convertToNumber = function(value) {
  return parseFloat(value.replace('$', ''));
}