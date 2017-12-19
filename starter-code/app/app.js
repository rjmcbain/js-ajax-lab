$(document).ready(function(){
console.log("Hello")
});

var books = $.get('https://den-super-crud.herokuapp.com/books').done(function(data){

for (i=0; i<data.books.length; i++){
    $('#books').append($('<img>',{src: data.books[i].image}));
    $('#books').append($('<li>').text(data.books[i].author));
    $('#books').append($('<li>').text(data.books[i].title));
    $('#books').append($('<li>').text(data.books[i].releaseDate));
       }
});