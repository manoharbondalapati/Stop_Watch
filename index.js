let milliseconds =0,seconds =0,minuts=0,hours=0;
let time=document.getElementById('time');
let audio = document.getElementById('audio');
let timechange;


document.getElementById('start').onclick=function()
{
    timechange=setInterval(changetime,10)
   
        audio.play();
}
function changetime()
{
    milliseconds =milliseconds+10;
    if(milliseconds===1000)
    {
        seconds=seconds+1;
        milliseconds=0;

        if(seconds===60)
        {
            minuts=minuts+1
            seconds=0;

           if(minuts===60)
           {
            hours=hours+1;
            minuts=0
           }
        }
    }
    
let h,m,s,ms;
if(hours<10)
{
    h='0'+hours
}
else
{
    h=hours
}
if(minuts<10)
{
    m='0'+minuts
}
else
{
    m=minuts
}
if(seconds<10)
{
    s='0'+seconds
}
else
{
    s=seconds
}
if(milliseconds<10)
{
    ms='0'+milliseconds;
}
else if(milliseconds<100)
{
    ms= '00'+milliseconds;
}
else
{
    ms=milliseconds;
}
time.innerHTML=`${h} : ${m} : ${s} : ${ms}`
}

document.getElementById("pause").onclick=function()
{
    clearInterval(timechange)
    audio.pause();
}

document.getElementById('reset').onclick=function()
{
    clearInterval(timechange)
    milliseconds=0;
    seconds=0;
    minuts=0;
    hours=0;
    time.innerHTML="00 : 00 : 00 : 000";
    audio.pause();
}