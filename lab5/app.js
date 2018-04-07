// Zad 1 wizualizacja wyniku wikipedii (nazwa -> link,...)
// jakies gonienie czegos po tablicy


var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500)
  .map(function(x){
    return q.val();
  })
  .switchMap(function(x){
    return searchWikiPedia(x);
  })
  .do(function(x){
    console.log(x);
  })
  .subscribe(function(x){
    $('#results').text(x);
  });

  function searchWikiPedia(term){
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
          action: 'opensearch',
          formant: 'json',
          search: term
        }
    }).promise();

  }

var move = {
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4
}

function randomMove() {
  var val =

  switch (x) {
    case 1: return move.UP;
    case 2: return move.RIGHT;
    case 3: return move.DOWN;
    case 5: return move.LEFT;
    default: break;

  }
}


Rx.Observable
.timer(0,1000)
.map(x => randomMove())
.subscribe({
  next: x=> {
    switch (x) {
      case move.UP:
      console.log("poruszam sie do gory");
      default:break;
    }
  }
})
