var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');


keyups.throttletime(500)
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

  function() searchWikiPedia(term){
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        datatype: 'jsonp',
        data: {
          action: 'opensearch',
          formant: 'json',
          search: term
        }
    }).promise();

  }
