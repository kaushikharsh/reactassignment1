
var allitems = document.getElementById('allitems');
var cupcakeitems = document.getElementById('cupcakeitems');
var doughnutitems = document.getElementById('doughnutitems');
var cakeitems = document.getElementById('cakeitems');
var all = document.getElementById('all');
var cupcake = document.getElementById('cupcake');
var doughnut = document.getElementById('doughnut');
var cake = document.getElementById('cake');
var title = document.getElementById('title');
var search = document.getElementById('search');
var body = document.getElementsByTagName('body');


search.addEventListener("keyup", function () {
    var input = search.value.toUpperCase();
    var cards = document.getElementsByClassName('card');
    for (var item = 0; item < cards.length; item++) {
        var arraycard = cards[item].querySelector('.card-title').innerHTML;
        arraycard = arraycard.toUpperCase();
        if (arraycard.includes(input)) {
            cards[item].style.display = "";
        } 
        else {
            cards[item].style.display = "none";
        }
    }
})


allitems.addEventListener("click", function () {
    title.innerHTML = "All";
    cupcakeitems.classList.remove('active');
    doughnutitems.classList.remove('active');
    cakeitems.classList.remove('active');
    this.classList.add('active');
    cupcake.style.display = "block";
    doughnut.style.display = "block";
    cake.style.display = "block";
});

cupcakeitems.addEventListener("click", function () {
    title.innerHTML = "Cupcakes";
    allitems.classList.remove('active');
    this.classList.add('active');
    doughnutitems.classList.remove('active');
    cakeitems.classList.remove('active');
    cupcake.style.display = "block";
    doughnut.style.display = "none";
    cake.style.display = "none";
});

doughnutitems.addEventListener("click", function () {
    title.innerHTML = "Doughnuts";
    allitems.classList.remove('active');
    cupcakeitems.classList.remove('active');
    this.classList.add('active');
    cakeitems.classList.remove('active');
    cupcake.style.display = "none";
    doughnut.style.display = "block";
    cake.style.display = "none";
});

cakeitems.addEventListener("click", function () {
    title.innerHTML = "Cakes";
    allitems.classList.remove('active');
    cupcakeitems.classList.remove('active');
    doughnutitems.classList.remove('active');
    this.classList.add('active');
    cupcake.style.display = "none";
    doughnut.style.display = "none";
    cake.style.display = "block";
});
