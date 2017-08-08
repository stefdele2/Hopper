var fotolink = localStorage.getItem("Foto");
$("#picprof").attr("src", fotolink);



    $.getJSON("https://api.myjson.com/bins/702yx", function (data) {
        for (var j = 0; j < data.length; j++) { 
            
            
         
            var arrr =JSON.parse(localStorage.getItem('Likes'));
            var checkk = data[j].name.replace(" ", '');
            
            if ( $.inArray(checkk, arrr) > -1 ) {
         
                var mainbier = document.createElement("div");
                mainbier.className="beer beer"+j;
     
                var cirkelke = document.createElement("a");
                cirkelke.className="cirkelke";
                cirkelke.href="beers-"+data[j].name;
                var imgbier = document.createElement("img");
                imgbier.src = data[j].pic;
                cirkelke.appendChild(imgbier);

                var beerinfo = document.createElement("div");
                beerinfo.className="beerinfo";

                var biernaam = document.createElement("div");
                biernaam.className="biernaam";
                biernaam.id ="biernaam"+j;
                var bierpercentage = document.createElement("div");
                bierpercentage.className="bierpercentage";
                bierpercentage.id ="bierpercentage"+j;
                var infobier = document.createElement("div");
                infobier.className="infobier";
                infobier.id ="infobier"+j;
         
                var remove = document.createElement("div");
                remove.className="remove";
                var cirkel2 = document.createElement("div");
                cirkel2.className="cirkel2";
         
                var trash = document.createElement("div");
                trash.className="fa fa-trash-o"+" "+"cirkelll"+j;
                var removetext = document.createElement("div");
                removetext.className="removetext";
                removetext.id="removetext"+j;
        
                cirkel2.appendChild(trash); 
                remove.appendChild(cirkel2);
                remove.appendChild(removetext);
         
                beerinfo.appendChild(biernaam);
                beerinfo.appendChild(bierpercentage);
                beerinfo.appendChild(infobier);
                beerinfo.appendChild(remove);
            
                mainbier.appendChild(cirkelke);
                mainbier.appendChild(beerinfo);
        
         
            
            
                    document.getElementById('mainbeer').appendChild(mainbier);

                    var removee = document.getElementById("removetext"+j);
                    removee.innerHTML += "Remove";
                    var biernaamm = document.getElementById("biernaam"+j);
                    biernaamm.innerHTML += data[j].name;
                    var bierpercentagee = document.getElementById("bierpercentage"+j);
                    bierpercentagee.innerHTML += data[j].percentage;
                    var infobierr = document.getElementById("infobier"+j);
                    infobierr.innerHTML += data[j].slagzin;
              

        
        
             };
         
         
        };
    
    });


   $(document).on('click',".fa-trash-o",function(){
             var theClas = this.className;
                    theClas = theClas.replace('fa','');
             theClas = theClas.replace('fa-trash-o','');
             theClas = theClas.replace(' ','');
             theClas = theClas.replace(' ','');
             theClas = theClas.replace(' ','');
        theClas = theClas.replace(' ','');
            theClas = theClas.replace('cirkelll','');

           
       $.getJSON("https://api.myjson.com/bins/702yx", function (data) {
                lijstt = JSON.parse(localStorage.getItem('Likes'));
                  
             var naamke = (data[theClas].name).replace(' ','');
                 lijstt = lijstt.filter(function(item) { 
                     return item !== naamke;
                        
                 })
                 
                 
                   
                  localStorage.setItem('Likes', JSON.stringify(lijstt));
           $('.beer'+theClas).remove();
        
       });
       
   });


document.getElementById("voornaam2").innerHTML = localStorage.getItem("Voornaam");
document.getElementById("achternaam2").innerHTML = localStorage.getItem("Achternaam"); 