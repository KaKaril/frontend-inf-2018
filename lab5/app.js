// Zad 1 wizualizacja wyniku wikipedii (nazwa -> link,...)
// jakies gonienie czegos po tablicy

var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500)
    .map(function (x) {
        return q.val();
    })
    .switchMap(function (x) {
        return searchWikiPedia(x);
    })
    .do(function (x) {
        console.log(x);
    })
    .subscribe(
        function (x) {
            var links = x[3];
            var headers = x[1];
            $('#myTable').empty();
            for (var i = 0; i < links.length; i++) {
                $('#myTable').append('<tr><td>' + headers[i] + '</td><td><a href="' + links[i] + '">' + links[i] + '</a></td></tr>');
            }
        },
        function (err) {
            console.log("Empty INPUT !!! ")
        },
        function () {
            console.log("Subscribe completed !!! ")
        }
    );

function searchWikiPedia(term) {
    if (term.length > 0) {
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
}