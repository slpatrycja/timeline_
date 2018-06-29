window.onload = function(){

    $("#title").fadeIn(1000);
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    x = 100;
    y = 50;
    ctx.moveTo(x,y);

    this.setTimeout(function(){
    var currentInterval = setInterval(go, 10);
        
        function go(){
        
        ctx.lineTo(x,y);
        y++;
        ctx.stroke();
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        if (y == 80){
            stop();
            toRight("#firstbox");
            setTimeout(restart, 2500);
           // $("#firstbox").fadeIn();
        }

        if (y == 120){
            stop();
            toLeft("#secondbox");
            setTimeout(restart, 2500);
            //window.scrollTo(0,200);
        }

        if (y == 230){
            stop();
            toRight("#thirdbox");
            setTimeout(restart, 2500);
           // $("#firstbox").fadeIn();
        }

        if (y == 280){
            stop();
            toLeft("#fourthbox");
            setTimeout(restart, 2500);       
            //window.scrollTo(0,550);
        }
        if (y == 430){
            stop();    
            $("#fifthbox").fadeIn(); 
            
            //window.scrollTo(0,550);
        }
        
        return x,y;
        }

    function toRight(item){
        a=100;
        var toSide = setInterval(function(){
        ctx.lineTo(a,y);
        a++;
        ctx.stroke();

        if(a == 200)
            clearInterval(toSide);
            $(item).fadeIn(2000);

        },10);
    }
        function toLeft(item){
            a=100;
            var toSide = setInterval(function(){
            ctx.lineTo(a,y);
            a--;
            ctx.stroke();
    
            if(a == 0)
                clearInterval(toSide);
                $(item).fadeIn(2000);
            },10);
    }

    function stop(){
        clearInterval(currentInterval);
    }

    function restart(){
       currentInterval = setInterval( function(){
        go();
    },10);
 
}
    },1000);
}