

if(("username" in localStorage === false) && ("password" in localStorage ===false)){
       window.location.href="/";
};






(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
    if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}
}).call(this);



jQuery("#logout").click(function(){
    localStorage.clear();
    window.location.href="/";
});



var fotolink = localStorage.getItem("Foto");
$("#pic1").attr("src", fotolink);


document.getElementById("voornaam").innerHTML = localStorage.getItem("Voornaam");
document.getElementById("achternaam").innerHTML = localStorage.getItem("Achternaam");   





