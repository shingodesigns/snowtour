(function(){function a(a,b,c,d){b=Math.ceil(((new Date(b,c-1,d)).getTime()-(new Date).getTime())/864E5);0>b&&(b=0);document.getElementById(a).innerHTML=b+" days to go!"}
a("cd0",2019,6,1);
a("cd1",2019,6,22);
a("cd2",2019,6,29);
})();