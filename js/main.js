let i = false;
document.querySelector("#button").addEventListener('click', function(){
    if(!i){
        document.getElementById('readMore').style.display = 'inline';
        i=true;
    }else{
        document.getElementById('readMore').style.display = 'none';
        i=false;
    }
}
)
document.querySelector("#button2").addEventListener('click', function(){
    if(!i){
        document.getElementById('readMore2').style.display = 'inline';
        i=true;
    }else{
        document.getElementById('readMore2').style.display = 'none';
        i=false;
    }
}
)
document.querySelector("#button3").addEventListener('click', function(){
    if(!i){
        document.getElementById('readMore3').style.display = 'inline';
        i=true;
    }else{
        document.getElementById('readMore3').style.display = 'none';
        i=false;
    }
}
)
document.querySelector("#button4").addEventListener('click', function(){
    if(!i){
        document.getElementById('readMore4').style.display = 'inline';
        i=true;
    }else{
        document.getElementById('readMore4').style.display = 'none';
        i=false;
    }
}
)
