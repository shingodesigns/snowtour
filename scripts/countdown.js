(function(){function a(a,b,c,d){b=Math.ceil(((new Date(b,c-1,d)).getTime()-(new Date).getTime())/864E5);0>b&&(b=0);document.getElementById(a).innerHTML=b+" days to go!"}
a("cd0",2021,6,5);
a("cd1",2021,7,3);
a("cd2",2021,7,3);
})();