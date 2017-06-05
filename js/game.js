var shape=new Object();
var runingExtra=new Object()
var Extra;
var pinkyPos;
var pinky;
var redPos;
var red;
var kingPos;
var king;
var board;
var liveLeft;
var score;
var pac_color;
var start_time;
var time_rimaining;
var time_elapsed;
var timeer;
var boardHight;
var boardWidth;
var food_remain;
var direction;
var smallBallAmount;
var midBallAmount;
var bigBallAmount;
var smallBallColor;
var midBallColor;
var bigBallColor;
var goalScore;
var strike;
var godMode;
var godModeTime;
var AOM;



$("#manWelcome").click(function()
{
    window.clearInterval(interval);
    $( document ).ready(function() {
        document.getElementById("loopAudio").pause();
    });
    $('.frame').hide();
    $('#' + 'Welcome').show();
});
$(document).ready(function () {
    var context = canvas.getContext("2d");
    $('.frame').hide();
    $('#Welcome').show();

    $("#manAbout").click(function ()
    {
        window.clearInterval(interval);
        $( document ).ready(function() {
            document.getElementById("loopAudio").pause();
        });
            $('.frame').hide();
            $('#' + 'About').show();    
    });
    $("#manRegister").click(function ()
    {
            window.clearInterval(interval);
            $( document ).ready(function() {
            document.getElementById("loopAudio").pause();
            });
            $('.frame').hide();
            $('#' + 'Register').show();
    });
    $("#manLogin").click(function ()
    {
            window.clearInterval(interval);
            $( document ).ready(function() {
            document.getElementById("loopAudio").pause();
            });
            $('.frame').hide();
            $('#' + 'Login').show();
    });

});

function Start(smallBall,midBall,bigBall,AMB,AOM,time,userName) {
    //board = new Array();

    this.AOM=AOM;
    shape.i=13;
    shape.j=13;
    timeer = time;
    runingExtra.showUpTime=timeer/2;
    runingExtra.i=10;
    runingExtra.j=19;
    runingExtra.ball=0;
    runingExtra.direction=1;
    runingExtra.namee="runingExtra";
    runingExtra.visible=true;
    if (AOM>0){
        pinkyPos=new Object();
        pinky = new Image();
        pinky.src='pic/pinky.gif';
        pinkyPos.i=1;
        pinkyPos.j=1;
        pinkyPos.direction=1;
        pinkyPos.stepcounter=0;
        pinkyPos.speed=3;
    }
    if (AOM>1){
        redPos=new Object();
        red = new Image();
        red.src='pic/redMonster.gif';
        redPos.i=1;
        redPos.j=26;
        redPos.direction=1;
        redPos.stepcounter=0;
        redPos.speed=2;

    }
    if (AOM>2){
        kingPos=new Object();
        king = new Image();
        king.src='pic/kingKong.gif';
        kingPos.i=26;
        kingPos.j=1;
        kingPos.direction=1;
        kingPos.stepcounter=0;
        kingPos.speed=1.5;
    }


    lbluserName.value=userName;
    liveLeft=3;
    strike=false;



    direction=1;
    food_remain=AMB;
    smallBallAmount=AMB*0.6;
    midBallAmount=AMB*0.3;
    bigBallAmount=AMB-smallBallAmount-midBallAmount;
    goalScore=smallBallAmount*5+midBallAmount*15+bigBallAmount*25;
    smallBallColor=smallBall;
    midBallColor=midBall;
    bigBallColor=bigBall;
    boardWidth=28;
    boardHight=29;
    score = 0;
    godMode=false;
    pac_color="yellow";
    start_time= new Date();
    $( document ).ready(function() {
       document.getElementById("loopAudio").play();
    });
    //4 = wall       1=superFood      2=pacman  0=empty  11=wallForMonsters
    //

    board =[
            [4,4,4,4,4,4,4,4,4,4,4,4,4,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,0,0,0,0,0,0,0,4,4,4,4,4,0,4,4,4,4,4,0,1,0,0,4,0,0,0,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,0,0,4,4,0,4],
            [4,1,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,4,4,0,4,4,1,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,4,4,0,4,4,0,4],
            [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,4],
            [4,0,4,4,0,4,4,4,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,4,4,4,0,4],
            [4,0,4,4,0,4,4,4,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,4,4,4,0,4],
            [4,0,4,4,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,0,4,5,5,5,4,0,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,0,0,0,0,4,4,0,0,0,0,4,5,5,5,4,0,4,4,0,0,0,0,4,0,0,0,0,4],
            [4,4,4,4,0,4,4,4,4,4,0,0,5,5,5,4,0,4,4,4,4,4,0,4,4,4,4,0,4],
            [4,4,4,4,0,4,4,4,4,4,0,0,5,5,5,4,0,4,4,4,4,4,0,4,4,4,4,0,4],
            [4,0,0,0,0,4,4,0,0,0,0,4,5,5,5,4,0,4,4,0,0,0,0,4,0,0,0,0,4],
            [4,0,4,4,0,4,4,0,4,4,0,4,5,5,5,4,0,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,1,4,4,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,4,4,1,4],
            [4,0,4,4,0,4,4,4,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,4,4,4,0,4],
            [4,0,4,4,0,4,4,4,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,4,4,4,0,4],
            [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,4,4,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,4,4,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,0,0,4,4,0,4],
            [4,0,4,4,0,4,4,0,4,4,4,4,4,0,4,4,4,4,4,0,4,4,0,4,0,4,4,0,4],
            [4,0,0,0,1,0,0,0,4,4,4,4,4,0,4,4,4,4,4,0,0,1,0,4,0,0,0,0,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ];
    while(smallBallAmount+midBallAmount+bigBallAmount>0){
        var emptyCell = findRandomEmptyCell(board);
        var food = getNewFood();
        board[emptyCell[0]][emptyCell[1]] = food;

    }
    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
        //e.preventDefault();
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.keyCode] = false;
    }, false);
    interval=setInterval(UpdatePosition, 150);
}

function getNewFood() {
    if(smallBallAmount>0){
        smallBallAmount--;
        return 7;
    }
    if(midBallAmount>0){
        midBallAmount--;
        return 8;
    }
    if(bigBallAmount>0){
        bigBallAmount--;
        return 9;
    }

}

function findRandomEmptyCell(board){
    var i = Math.floor((Math.random() * boardWidth-1) + 1);
    var j = Math.floor((Math.random() * boardHight-1) + 1);
    while(board[i][j]!=0)
    {
            i = Math.floor((Math.random() * boardWidth-1) + 1);
            j = Math.floor((Math.random() * boardHight-1) + 1);
    }
    return [i,j];
}

function GetKeyPressed() {
    if (keysDown[38]) {
        return 1;
    }
    if (keysDown[40]) {
        return 2;
    }
    if (keysDown[37]) {
        return 3;
    }
    if (keysDown[39]) {
        return 4;
    }
}

function Draw() {
    var context = canvas.getContext("2d");
    canvas.width=canvas.width; //clean board
    lblScore.value = score;
    life1.style.visibility = 'hidden';
    life2.style.visibility = 'hidden';
    life3.style.visibility = 'hidden';
    if (liveLeft>0){life1.style.visibility = 'visible';}
    if (liveLeft>1){life2.style.visibility = 'visible';}
    if (liveLeft>2){life3.style.visibility = 'visible';}
    lblTime.value = timeer-time_rimaining;
    for (var i = 0; i < boardWidth; i++) {
        for (var j = 0; j < boardHight; j++) {
            var center = new Object();
            center.x = i * 18 +9;
            center.y = j * 18 +9;
            var mod = time_elapsed%1;
            if (board[i][j] == 2) {
                /* pacman right */
                if(direction==4){
                    context.beginPath();
                    if(mod<0.5){
                        context.arc(center.x, center.y, 9, 0.2 * Math.PI, 1.8 * Math.PI); // half circle
                    }else {
                        context.arc(center.x, center.y, 9, 0.05, 1.95 * Math.PI); // half circle
                    }
                    context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x + 4, center.y - 5, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                /* pacman Up */
                if(direction==1){
                    context.beginPath();
                    if(mod<0.5){
                        context.arc(center.x, center.y, 9, 1.6 * Math.PI, 1.3 * Math.PI); // half circle
                    }else {
                        context.arc(center.x, center.y, 9, 1.55 * Math.PI, 1.45 * Math.PI); // half circle
                    }
                    context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x - 5, center.y - 4, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                /* pacman left */
                if(direction==3){
                    context.beginPath();
                    if(mod<0.5){
                        context.arc(center.x, center.y, 9, 1.2 * Math.PI, 0.8 * Math.PI); // half circle
                    }else {
                        context.arc(center.x, center.y, 9, 1.05 * Math.PI, 0.95 * Math.PI); // half circle
                    }
                    context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x - 4, center.y - 5, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }/* pacman down */
                if(direction==2){
                    context.beginPath();
                    if(mod<0.5){
                        context.arc(center.x, center.y, 9, 0.7 * Math.PI, 0.3  * Math.PI); // half circle
                    }else {
                        context.arc(center.x, center.y, 9, 0.55 * Math.PI, 0.45  * Math.PI); // half circle
                    }
                    context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x + 5, center.y + 4, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
            }
            else if (board[i][j] == 7) {//small big balls
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = smallBallColor; //color
                context.fill();
                context.beginPath();
                context.fillStyle = "black"; //color
                context.fillText("5",center.x-3, center.y+3);
                context.strokeStyle=="#171532";
                context.fill();
            }
            else if (board[i][j] == 8) {//draw mid balls
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = midBallColor; //color
                context.fill();
                context.beginPath();
                context.fillStyle = "black"; //color
                context.fillText("15",center.x-6, center.y+4);
                context.fill();
            }
            else if (board[i][j] == 9) {//draw big balls
                context.beginPath();
                context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
                context.fillStyle = bigBallColor; //color
                context.fill();

                context.beginPath();
                context.fillStyle = "black"; //color
                context.fillText("25",center.x-6, center.y+3);
                context.fill();

            }
            else if (board[i][j] == 4) {//draw wall
                context.beginPath();
                context.rect(center.x-9, center.y-9, 18, 18);
                context.fillStyle = "#0000BB"; //color
                context.fill();
            }
            else if (board[i][j] == 40) {//draw wall
                context.beginPath();
                context.rect(center.x-9, center.y-9, 18, 18);
                context.fillStyle = "#0000BB"; //color
                context.fill();
            }

            else if (board[i][j] == 1) {//small big balls
                context.beginPath();
                context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
                if(mod<0.5) {
                    context.fillStyle = "white"; //color
                    context.fill();
                    context.lineWidth = 3;
                    context.strokeStyle = '#8d0004';
                }else{
                    context.fillStyle = "white"; //color
                    context.fill();
                    context.lineWidth = 3;
                    context.strokeStyle = '#5cff89';
                }
                context.stroke();
            }
            else if (board[i][j] == 6) {//draw pinki balls
                context.drawImage(pinky, center.x-9, center.y-9, 18, 18);
            }
            else if (board[i][j] == 16) {//draw pinki balls
                context.drawImage(red, center.x-9, center.y-9, 18, 18);
            }
            else if (board[i][j] == 26) {//draw pinki balls
                context.drawImage(king, center.x-9, center.y-9, 18, 18);
            }
            else if (board[i][j] == 30) {//draw pinki balls
                context.beginPath();
                context.fillStyle = "white"; //color
                context.fillText("+50",center.x-6, center.y+3);
                context.fill();
            }
        }
    }
}

function inTheSamePlace(shape, monster) {
    if(shape.i==monster.i&&shape.j==monster.j){
        return true;
    }
    return false;
}

function UpdatePosition() {

    board[shape.i][shape.j]=0;
    if(AOM>0){
        board[pinkyPos.i][pinkyPos.j]=0;
        if(pinkyPos.ball!=0){
            board[pinkyPos.i][pinkyPos.j]=pinkyPos.ball;
            pinkyPos.ball=0;
        }
    }
    if(AOM>1){
        board[redPos.i][redPos.j]=0;
        if(redPos.ball!=0){
            board[redPos.i][redPos.j]=redPos.ball;
            redPos.ball=0;
        }
    }
    if(AOM>2){
        board[kingPos.i][kingPos.j]=0;
        if(kingPos.ball!=0){
            board[kingPos.i][kingPos.j]=kingPos.ball;
            kingPos.ball=0;
        }
    }
    if(runingExtra.visible){
        board[runingExtra.i][runingExtra.j]=0;
        if(runingExtra.ball!=0){
            board[runingExtra.i][runingExtra.j]=runingExtra.ball;
            runingExtra.ball=0;
        }
    }


    var x = GetKeyPressed()
    if(x!=null){
        this.direction=x;
    }
    if(x==1)
    {
        if(shape.j>0 && board[shape.i][shape.j-1]!=4&& board[shape.i][shape.j-1]!=11)
        {
            shape.j--;
        }
    }
    if(x==2)
    {

        if(shape.j<boardHight-1 && board[shape.i][shape.j+1]!=4&&board[shape.i][shape.j+1]!=11)
        {
            shape.j++;
        }
    }
    if(x==3)//left
    {
        if(shape.i==0){
            shape.i=boardWidth;
        }
        if(shape.i>0 && board[shape.i-1][shape.j]!=4&& board[shape.i-1][shape.j]!=11)
        {
            shape.i--;
        }
    }
    if(x==4)
    {
        if(shape.i==boardWidth-1){
            shape.i=0;
        }
        if(shape.i<boardHight-1 && board[shape.i+1][shape.j]!=4&& board[shape.i+1][shape.j]!=11)
        {
            shape.i++;
        }
    }



    checkIfMoveIsOk();

    //direction
    var eatSound = new Audio('sounds/pacman_chomp.wav');

    if(board[shape.i][shape.j]==7)
    {
        food_remain--;
        score+=5;
        eatSound.play();
    }
    if(board[shape.i][shape.j]==8)
    {
        food_remain--;
        score+=15;
        eatSound.play();
    }
    if(board[shape.i][shape.j]==9)
    {
        food_remain--;
        score+=25;
        eatSound.play();
    }
    if(board[shape.i][shape.j]==1)
    {
        godMode=true;
        godModeTime=50;
        new Audio('sounds/pacman_intermission.wav').play();
    }
    if(godMode){
        godModeTime--;
        if(godModeTime==0){
            godMode=false;
        }
        if(AOM>0){
            pinky.src='pic/deadMonster.gif';
        }
        if(AOM>1){
            red.src='pic/deadMonster.gif';
        }
        if(AOM>2){
            king.src='pic/deadMonster.gif';
        }
    }
    else{
        if(AOM>0){
            pinky.src='pic/pinky.gif';
        }
        if(AOM>1){
            red.src='pic/redMonster.gif';
        }
        if(AOM>2){
            king.src='pic/kingKong.gif';
        }
    }
    //setT

    board[shape.i][shape.j]=2

    if(AOM>0){
        pinkyPos.stepcounter+=1;
        monstarIsSmart(pinkyPos);
        if (board[pinkyPos.i][pinkyPos.j]==7||board[pinkyPos.i][pinkyPos.j]==8||board[pinkyPos.i][pinkyPos.j]==9||board[pinkyPos.i][pinkyPos.j]==1){
            pinkyPos.ball=board[pinkyPos.i][pinkyPos.j];
        }
        board[pinkyPos.i][pinkyPos.j]=6;
        checkIfMoveIsOk();
    }
    if(AOM>1){
        redPos.stepcounter+=1;
        monstarIsSmart(redPos);
        if (board[redPos.i][redPos.j]==7||board[redPos.i][redPos.j]==8||board[redPos.i][redPos.j]==9||board[redPos.i][redPos.j]==1){
            redPos.ball=board[redPos.i][redPos.j];
        }
        board[redPos.i][redPos.j]=16;
        checkIfMoveIsOk();
    }
    if(AOM>2){
        kingPos.stepcounter+=1;
        monstarIsSmart(kingPos);
        if (board[kingPos.i][kingPos.j]==7||board[kingPos.i][kingPos.j]==8||board[kingPos.i][kingPos.j]==9||board[kingPos.i][kingPos.j]==1){
            kingPos.ball=board[kingPos.i][kingPos.j];
        }
        board[kingPos.i][kingPos.j]=26;
        checkIfMoveIsOk();
    }
    if(runingExtra.visible){
        runingExtra.stepcounter+=1;
        monstarIsSmart(runingExtra);
        if (board[runingExtra.i][runingExtra.j]==7||board[runingExtra.i][runingExtra.j]==8||board[runingExtra.i][runingExtra.j]==9||board[runingExtra.i][runingExtra.j]==1){
            runingExtra.ball=board[runingExtra.i][runingExtra.j];
        }
        board[runingExtra.i][runingExtra.j]=30;
        checkIfMoveIsOk();
    }

    var currentTime=new Date();
    time_elapsed=(currentTime-start_time)/1000;
    time_rimaining=getTimeRemaining(start_time );
    /*if(score>=20&&time_elapsed<=10)
    {
        pac_color="green";
    }*/
    food_remain = countNumberOfBalls();
    if(liveLeft==0){
        window.clearInterval(interval);
        new Audio('sounds/pacman_death.wav').play();
        setTimeout(function(){
            window.clearInterval(interval);
            window.alert("you lost!")
            $( document ).ready(function() {
                document.getElementById("loopAudio").pause();
            });
        }, 100);
    }

    else if(food_remain==0)
    {
        window.clearInterval(interval);
        new Audio('sounds/pacman_death.wav').play();
        setTimeout(function(){
            window.clearInterval(interval);
        window.alert("We have a winner!! you scored: "+score);
            $( document ).ready(function() {
                document.getElementById("loopAudio").pause();
            });
        }, 100);
    }
    else if((timeer-time_rimaining)<0) {
        new Audio('sounds/pacman_death.wav').play();
        setTimeout(function(){
            window.clearInterval(interval);
            if (score < 150) {
                window.alert("time is up! you can do better you scored: "+score);
            }else {
                window.alert("time is up! We have a winner!!  you scored: "+score);
            }
            $( document ).ready(function() {
                document.getElementById("loopAudio").pause();
            });
        }, 100);

    }
    else
    {
        Draw();
    }
}

function countNumberOfBalls() {
    var ans=0;
    for (var i = 0; i < boardWidth; i++) {
        for (var j = 0; j < boardHight; j++) {
            if(board[i][j]==7||board[i][j]==8||board[i][j]==9){ans++;}
        }
    }
    if(AOM>0){
        if(pinkyPos.ball!=0){ans++;}
    }
    if(AOM>1){
        if(redPos.ball!=0){ans++;}
    }
    if(AOM>2){
        if(kingPos.ball!=0){ans++;}
    }
    return ans;
}

function getTimeRemaining(endtime){
    var t = Date.parse(new Date())-Date.parse(endtime);
    var seconds = Math.floor( (t/1000) % 120 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var sumInSec = seconds+minutes*60;
    return sumInSec;
}

function getNextRecomendedStep( monsterPos )
{
    if((monsterPos.i-shape.i>0)&&(Math.abs(monsterPos.i-shape.i) >Math.abs(monsterPos.j-shape.j)))
    {
        if(monsterPos.namee=="runingExtra"){return 4;}
        if(!godMode||(monsterPos.namee=="runingExtra"))
            return 3;
        else{return 4;}
    }

    if((monsterPos.i-shape.i<0)&&(Math.abs(monsterPos.i-shape.i)>Math.abs(monsterPos.j-shape.j)))
    {
        if(monsterPos.namee=="runingExtra"){return 3;}
        if(!godMode||(monsterPos.namee=="runingExtra"))
            return 4;
        else
            return 3;
    }
    if((Math.abs(monsterPos.i-shape.i)<Math.abs(monsterPos.j-shape.j))&&monsterPos.j-shape.j>0)
    {
        if(monsterPos.namee=="runingExtra"){return 2;}
        if(!godMode||(monsterPos.namee=="runingExtra"))
            return 1;
        else{return 2;}
    }
    if((Math.abs(monsterPos.i-shape.i)<Math.abs(monsterPos.j-shape.j))&&monsterPos.j-shape.j<0)
    {
        if(monsterPos.namee=="runingExtra"){return 1;}
        if(!godMode)
            return 2;
        else
            return 1;
    }
    return monsterPos.direction;
}

function checkIfMoveIsOk(){
    if(AOM>0){
        if ((inTheSamePlace(shape,pinkyPos)&&!godMode)){

            new Audio('sounds/pacman_death.wav').play();
            setTimeout(function(){
                window.alert("strike! "+(liveLeft)+ " more Lives")
            }, 100);

            liveLeft--;
            resetGame();
        }
    }
    if(AOM>1){
        if (inTheSamePlace(shape,redPos)&&!godMode){

            new Audio('sounds/pacman_death.wav').play();
            setTimeout(function(){
                window.alert("strike! "+(liveLeft)+ " more Lives")
            }, 100);

            liveLeft--;
            resetGame();
        }
    }
    if(AOM>2){
        if (inTheSamePlace(shape,kingPos)&&!godMode){

            new Audio('sounds/pacman_death.wav').play();
            setTimeout(function(){
                window.alert("strike! "+(liveLeft)+ " more Lives")
            }, 100);

            liveLeft--;
            resetGame();
        }
    }


var coin =new Audio('sounds/coin.mp3');
    if(AOM>0){
        if (inTheSamePlace(shape,pinkyPos)&&godMode){
            coin.play();
            score+=50;
            pinkyPos.i=1;
            pinkyPos.j=1;
        }
    }
    if(AOM>1){
        if (inTheSamePlace(shape,redPos)&&godMode){
            coin.play();
            score+=50;
            redPos.i=1;
            redPos.j=27;
        }
    }
    if(AOM>2){
        if (inTheSamePlace(shape,kingPos)&&godMode){
            coin.play();
            score+=50;
            kingPos.i=26;
            kingPos.j=1;
        }
    }
    if(runingExtra.visible){
        if (inTheSamePlace(shape,runingExtra)){
            coin.play();
            score+=50;
            runingExtra.visible=false;
        }
    }
}

function resetGame() {
    board[shape.i][shape.j]=0;
    shape.i=13;
    shape.j=13;

    if(AOM>0){
        board[pinkyPos.i][pinkyPos.j]=0;
        pinkyPos.i=1;
        pinkyPos.j=1;
        pinkyPos.direction=1;
        if(pinkyPos.ball!=0){
            board[pinkyPos.i][pinkyPos.j]=pinkyPos.ball;
            pinkyPos.ball=0;
        }
    }

    if(AOM>1){
        board[redPos.i][redPos.j]=0;
        redPos.i=1;
        redPos.j=27;
        redPos.direction=1;
        if(redPos.ball!=0){
            board[redPos.i][redPos.j]=redPos.ball;
            redPos.ball=0;
        }
    }

    if(AOM>2){
        board[kingPos.i][kingPos.j]=0;
        kingPos.i=26;
        kingPos.j=1;
        kingPos.direction=1;
        if(kingPos.ball!=0){
            board[kingPos.i][kingPos.j]=kingPos.ball;
            kingPos.ball=0;
        }
    }

}

function monstarIsSmart(pinkyPos,shape) {
    pinkyPos.nextTurn=getNextRecomendedStep(pinkyPos,shape);
    var temp= pinkyPos.direction;

    //next recommended
    if(pinkyPos.nextTurn==1){var d=pinkyPos.j-1;var c=pinkyPos.i;}
    if(pinkyPos.nextTurn==2){var d=pinkyPos.j+1;var c=pinkyPos.i;}
    if(pinkyPos.nextTurn==3){var c=pinkyPos.i-1;var d=pinkyPos.j;}
    if(pinkyPos.nextTurn==4){var c=pinkyPos.i+1;var d=pinkyPos.j;}

    //current direction
    if(temp==1){var k=pinkyPos.j-1;var o=pinkyPos.i;}
    if(temp==2){var k=pinkyPos.j+1;var o=pinkyPos.i;}
    if(temp==3){var o=pinkyPos.i-1;var k=pinkyPos.j;}
    if(temp==4){var o=pinkyPos.i+1;var k=pinkyPos.j;}

    if(board[o][k]!=4 && board[c][d]==4)
    {
        pinkyPos.i=o;
        pinkyPos.j=k;
        return;
    }


    pinkyPos.direction=pinkyPos.nextTurn;

    //Up//
    if(pinkyPos.direction==1)
    {
        if (board[pinkyPos.i][pinkyPos.j-1]==4&&board[o][k]==4){
            var tmp = Math.random();
            if (tmp<0.5&&board[pinkyPos.i-1][pinkyPos.j]!=4){pinkyPos.direction=3;}
            else{if(board[pinkyPos.i+1][pinkyPos.j]!=4){pinkyPos.direction=4; } else {pinkyPos.direction=2; }}
        }


        if(pinkyPos.j>0 && board[pinkyPos.i][pinkyPos.j-1]!=4)
        {
            if(pinkyPos.stepcounter%pinkyPos.speed!=0) {
                pinkyPos.j--;
            }
        }
    }
    //Down//
    else if(pinkyPos.direction==2)
    {
        if (board[pinkyPos.i][pinkyPos.j+1]==4&&board[o][k]==4){
            var tmp = Math.random();
            if (tmp<0.5&&board[pinkyPos.i-1][pinkyPos.j]!=4){pinkyPos.direction=3;}
            else{if(board[pinkyPos.i+1][pinkyPos.j]!=4){pinkyPos.direction=4;} else {pinkyPos.direction=1;}}
        }
        if(pinkyPos.j<boardHight-1 && board[pinkyPos.i][pinkyPos.j+1]!=4)
        {
            if(pinkyPos.stepcounter%pinkyPos.speed!=0) {
                pinkyPos.j++;
            }
        }
    }
    else if(pinkyPos.direction==3)//left
    {
        if (board[pinkyPos.i-1][pinkyPos.j]==4&&board[o][k]==4){
            var tmp = Math.random();
            if (tmp<0.5&&board[pinkyPos.i][pinkyPos.j-1]!=4){pinkyPos.direction=2;}
            else{if(board[pinkyPos.i][pinkyPos.j+1]!=4){pinkyPos.direction=1;} else {pinkyPos.direction=4;}}
        }
        if(pinkyPos.i==0){
            pinkyPos.i=boardWidth;
        }
        if(pinkyPos.i>0 && board[pinkyPos.i-1][pinkyPos.j]!=4)
        {
            if(pinkyPos.stepcounter%pinkyPos.speed!=0) {
                pinkyPos.i--;
            }
        }
    }
    else if(pinkyPos.direction==4)//right
    {
        if (board[pinkyPos.i+1][pinkyPos.j]==4&&board[o][k]==4){
            var tmp = Math.random();
            if (tmp<0.5&&board[pinkyPos.i][pinkyPos.j-1]!=4){pinkyPos.direction=2;}
            else{if(board[pinkyPos.i][pinkyPos.j+1]!=4){pinkyPos.direction=1; } else {pinkyPos.direction=3;}}
        }
        if(pinkyPos.i==boardWidth-1){
            pinkyPos.i=0;
        }
        if(pinkyPos.i<boardHight-1 && board[pinkyPos.i+1][pinkyPos.j]!=4)
        {
            if(pinkyPos.stepcounter%pinkyPos.speed  !=0) {
                pinkyPos.i++;

            }
        }
    }



}

function newGame() {
    window.clearInterval(interval);
    $('.frame').hide();
    $("#dialog-form").show();
}

