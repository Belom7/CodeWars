Math.ceil = x=> x%1==0 ? x : x-x%1+1;
Math.floor = x=> x-x%1;
Math.round = x=> x%1==0 ? x : x-x%1+(x%1>=.5 ? 1:0);
Math.abs = x=> x<0 ? -x : x;
Math.max = function (...x) {return x.sort((a,b)=>b-a)[0];}
Math.min = function (...x) {return x.sort((a,b)=>a-b)[0];}
Math.pow = function (x,y) {var rs=1; while (y--) rs*=x; return rs;}