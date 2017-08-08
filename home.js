jQuery(".item").click(function(){
    $(".item").removeClass("itemactive");
   
});
jQuery(".Bruin").click(function(){
     $('.mainitem').remove();
    $(".Bruin").addClass("itemactive");
});

jQuery(".Blond").click(function(){
     $('.mainitem').remove();
    $(".Blond").addClass("itemactive");
});
jQuery(".Amber").click(function(){
     $('.mainitem').remove();
    $(".Amber").addClass("itemactive");
});
jQuery(".Pils").click(function(){
     $('.mainitem').remove();
    $(".Pils").addClass("itemactive");
});
jQuery(".itemall").click(function(){
     $('.mainitem').remove();
    $(".itemall").addClass("itemactive");
});


jQuery(".item").click(function(){

    $.getJSON("https://api.myjson.com/bins/702yx", function (data) {
        for (var j = 0; j < data.length; j++) { 
            
            
            
            
            //checken welke tab op home
            if(($( ".itemactive" ).hasClass(data[j].type ))||($( ".itemactive" ).hasClass("itemall"))) {
             
                //lijst maken
                
                var mainitem = document.createElement("div");
                mainitem.className = "col-12 col-sm-6 col-md-4 col-xl-3 mainitem";
                var maininhoud = document.createElement("div");
                maininhoud.className = "maininhoud";
                var hartje = document.createElement("div");
    
                var arr =JSON.parse(localStorage.getItem('Likes'));
                var check = data[j].name.replace(" ", '');
         
         
                if ( $.inArray(check, arr) > -1 ) {
                    var klasse = "fa-heart";
                }else {
                var klasse = "fa-heart-o";
                };
    
    
    
                hartje.className = "fa hartje"+" "+klasse+" "+data[j].name.replace(" ","");
                hartje.id=data[j].name;
  
                var ruit = document.createElement("div");
                ruit.className = "ruit";
                var ruitklein = document.createElement("div");
                ruitklein.className = "ruitklein";
                var driehoek = document.createElement("div");
                driehoek.className = "driehoek";
                var percentage = document.createElement("div");
                percentage.className = "percentage";
                var itemfoto = document.createElement("div");
                itemfoto.className = "itemfoto";
                itemfoto.id = "itemfoto"+j;
                var maininhoudtext = document.createElement("div");
                maininhoudtext.className = "maininhoudtext";
                maininhoudtext.id = "maininhoudtext"+j;
                var percentagetext = document.createElement("p");
                percentagetext.id = "percentage"+j;
                
                mainitem.appendChild(maininhoud);
                maininhoud.appendChild(hartje);
                maininhoud.appendChild(ruit);
                maininhoud.appendChild(ruitklein);
                maininhoud.appendChild(driehoek);
                maininhoud.appendChild(percentage);
                maininhoud.appendChild(itemfoto);
                maininhoud.appendChild(maininhoudtext);
                percentage.appendChild(percentagetext);
                document.getElementById('lc').appendChild(mainitem);
         
         
                var pic = document.createElement("img");
                pic.src = data[j].pic;
                pic.className = "itemfoto";
                var linky = document.createElement("a");
                linky.href ="beers-"+data[j].name;
                linky.appendChild(pic);
                document.getElementById('itemfoto'+j).appendChild(linky);
        
                document.getElementById('maininhoudtext'+j).innerHTML =(data[j].name);
                document.getElementById('percentage'+j).innerHTML = data[j].percentage;
            };
        };
    });
});

$("document").ready(function() {
    $(".itemactive").trigger('click');
});


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