var accounts = [               
    {
                "Login":"hey",
                "Pw":"heyo",
                "Voornaam":"Donald",
                "Achternaam": "Trump",
                "Foto": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
         "Likes": "[]"
                },
   
  {
                         "Login":"hey1",
                "Pw":"heyo1",
                "Voornaam":"Mark",
                "Achternaam": "De Bakker",
                "Foto": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
         "Likes": "[]"
                },
   {
                        "Login":"hey2",
                "Pw":"heyo2",
                "Voornaam":"Jeff",
                "Achternaam": "Patat",
                "Foto": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
         "Likes": "[]"
                },
      {
                      "Login":"hey3",
                "Pw":"heyo3",
                "Voornaam":"Kiki",
                "Achternaam": "Trump",
                "Foto": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
         "Likes": "[]"
                },
               
                
];

//logincheck
 jQuery("#login-button").click(function(event){
     for (var i = 0; i < accounts.length; i++) { 
         myJSON = ((JSON.stringify(accounts[i].Login))+","+(JSON.stringify(accounts[i].Pw))).replace(/\"/g, "");
         localStorage.setItem("testJSON", myJSON);
         
        var Stored = localStorage.getItem("testJSON");
        var StoredName = Stored.split(",")[0];
        var StoredPw = Stored.split(",")[1];
        var userName = document.getElementById('userName').value;
        var userPw = document.getElementById('userPw').value;

        if(userName == StoredName && userPw == StoredPw) {
            
            window.location.href="home.html"; 
            localStorage.setItem("username", accounts[i].Login);
            localStorage.setItem("password", accounts[i].Pw);
            localStorage.setItem("Voornaam", accounts[i].Voornaam);
            localStorage.setItem("Achternaam", accounts[i].Achternaam);
            localStorage.setItem("Foto", accounts[i].Foto);
            localStorage.setItem("Likes", accounts[i].Likes);
        }
        else {
            if( i == (accounts.length-1)) {
            $("#wrong").addClass('wrong2');
            }
        };

     }
});