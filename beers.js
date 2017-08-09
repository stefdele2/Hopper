$(document).on('click',".back-button",function(){
    window.history.back();
});

 var currentLocation = window.location.pathname;
currentLocation = currentLocation.replace('/beers-','');
currentLocation = currentLocation.replace('%20','');
currentLocation = currentLocation.toLowerCase();

        var arr =JSON.parse(localStorage.getItem('Likes'))

        
var sorted = [];
for (var i = 0; i < arr.length; i++) {
    sorted.push(arr[i].toLowerCase());
}
sorted.sort();
        

         
if ( $.inArray(currentLocation, sorted) > -1 ) {
    $(".hartje").removeClass("fa-heart-o");
    $(".hartje").addClass("fa-heart");
          
}else {
    $(".hartje").removeClass("fa-heart");
    $(".hartje").addClass("fa-heart-o");
};

var naam = document.getElementById('naamm').innerHTML;
naam = naam.replace('<span style="color: #DD0D52">/</span>',"")
naam = naam.replace('Blond','');
naam = naam.replace('Bruin','');
naam = naam.replace('Amber','');
naam = naam.replace('Pils','');
naam = naam.replace(' ','');
naam = naam.replace(' ','');
$(".hartje").addClass(naam);


$(document).on('click',".hartje",function(){
    var theClass = this.className;

    theClass = theClass.replace('hartje','');
    theClass = theClass.replace('fa','');
    theClass = theClass.replace('fa-heart-o','');
    theClass = theClass.replace('fa-heart','');
    theClass = theClass.replace(' ','');
    theClass = theClass.replace(' ','');
    theClass = theClass.replace(' ','');
    theClass = theClass.replace(' ','');

             
    if($("."+theClass).hasClass('fa-heart-o')){
        Likes = JSON.parse(localStorage.getItem('Likes'));
        Likes.push(theClass);
                   
        localStorage.setItem('Likes', JSON.stringify(Likes));
        $("."+theClass).removeClass("fa-heart-o");
        $("."+theClass).addClass("fa-heart");
    }
    else {
        Likes = JSON.parse(localStorage.getItem('Likes'));
        Likes = Likes.filter(function(item) { 
            return item !== theClass;
            });
        localStorage.setItem('Likes', JSON.stringify(Likes));
        $("."+theClass).removeClass("fa-heart");
        $("."+theClass).addClass("fa-heart-o");
    };
             
});