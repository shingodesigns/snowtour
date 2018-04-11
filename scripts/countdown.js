(function(){function a(a,b,c,d){b=Math.ceil(((new Date(b,c-1,d)).getTime()-(new Date).getTime())/864E5);0>b&&(b=0);document.getElementById(a).innerHTML=b+" days to go!"}
a("cd0",2018,6,2);
a("cd1",2018,6,16);
a("cd2",2018,6,29);
a("cd3",2018,6,30);
})();