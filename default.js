var accounts = [               
    {
                "Login":"stefdele2",
                "Pw":"deleurere",
                "Voornaam":"Stef",
                "Achternaam": "Deleurere",
                "Foto": "https://scontent.fbru2-1.fna.fbcdn.net/v/t1.0-9/18301875_1505105966167290_4591565300930596118_n.jpg?oh=d0d2f2d2915dc7f7cd518787c987737a&oe=5A22EF00",
         "Likes": "[]"
                },
   
  {
                         "Login":"robdeco",
                "Pw":"decock",
                "Voornaam":"Robbe",
                "Achternaam": "De Cock",
                "Foto": "https://scontent.fbru2-1.fna.fbcdn.net/v/t31.0-8/15138520_10206951884227763_2202077394948839222_o.jpg?oh=bf7a83d7e05ce5fedb1b9f9c83a42b1a&oe=5A2DEDC3",
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
                      "Login":"gdmdocent",
                "Pw":"artevelde",
                "Voornaam":"Philippe",
                "Achternaam": "De Pauw - <br>Waterschoot",
                "Foto": "https://ca.slack-edge.com/T0PUV1JMT-U0PUZ594N-9ec1c2dfc9d6-1024",
         "Likes": "[]"
                },
               
                
];

//logincheck
 jQuery("#login-button").click(function(event){
     var checky = 0;
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
            checky +=1;
        };

     }
     if (checky === accounts.length){
     $("#wrong").addClass('wrong2');

     };
              setTimeout(function () {
        $("#wrong").removeClass('wrong2');
},300);
     
     
    localStorage.removeItem('testJSON');
});