function getTime(){
let date=new Date() ;
document.getElementById('clock').innerHTML=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
setInterval(getTime,1000)
}
getTime()