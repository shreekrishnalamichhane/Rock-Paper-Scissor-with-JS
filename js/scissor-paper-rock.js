var RoundCard_div = document.querySelector('#RoundCard-div');
var ChooseRounds_div = document.querySelector('#ChooseRounds-div');
var Game_div = document.querySelector('#Game-div');
var ScoreCard_div = document.querySelector('#ScoreCard-div');
var Result_div = document.querySelector('#Result-div');
var GameOver_div = document.querySelector('#GameOver-div');

var CurrentRound = document.querySelector('#CurrentRound');
var TotalRounds = document.querySelector('#TotalRounds');

var ComputerScore = document.querySelector('#ComputerScore');
var HumanScore = document.querySelector('#HumanScore');
var DrawScore = document.querySelector('#DrawScore');

var ComputerChoiceText = document.querySelector('#ComputerChoiceText');
var HumanChoiceText = document.querySelector('#HumanChoiceText');
var ResultText = document.querySelector('#ResultText');

var Btn = document.querySelectorAll('.user-input');

var Input = ['Scissor','Paper','Rock'];

var primary = '#4285f4';
var secondary = '#fc685f';
var success = '#00c851';
var danger = '#ff3547';
var dark = '#212529';

var CScore = 0; //Computer Score
var HScore = 0; //Human Score
var DScore = 0; //Draw Score

var TRounds = 0; //Total Rounds
var CRounds = 0; //Current Round


$(Result_div).css("background-color",primary);
GetRounds();
function GetRounds(){
    TRounds = 0;
    document.querySelector("#RoundBtn5").addEventListener('click',function(){
        TRounds = $(this).attr("rn");
        init();
    });
    document.querySelector("#RoundBtn10").addEventListener('click',function(){
        TRounds = $(this).attr("rn");
        init();
    });
    document.querySelector("#RoundBtn15").addEventListener('click',function(){
        TRounds = $(this).attr("rn");
        init();
    });
    document.querySelector("#RoundBtn20").addEventListener('click',function(){
        TRounds = $(this).attr("rn");
        init();
    });
    
}
function init(){
    CRounds = TRounds;
    console.log(TRounds);
    $(CurrentRound).html(TRounds-CRounds+1);
    $(ChooseRounds_div).addClass("d-none");
    $(Game_div).removeClass("d-none");
    $(RoundCard_div).removeClass("d-none");
    $(TotalRounds).html(TRounds);  
    StartGame(); 
}
function StartGame(){
    ClearGame();
    HumanChoice();          
}
function ClearGame(){
    if(TRounds-CRounds < TRounds)
    $(CurrentRound).html(TRounds-CRounds+1);
    $(ComputerScissorBtn).css("background-color",secondary);
    $(ComputerPaperBtn).css("background-color",secondary);
    $(ComputerRockBtn).css("background-color",secondary);
    $(Btn).css("background-color",secondary);
}
function ScoreCardRefresh(winner){
    if(winner == 1){
        HScore++ ;
        $(HumanScore).html(HScore);
    }
    else if(winner == 2){
        DScore++ ;
        $(DrawScore).html(DScore);
    }
    else{
        CScore++ ;
        $(ComputerScore).html(CScore);
    }
}
function ComputerChoice(){
    return Math.floor(Math.random() * Math.random() / Math.random() + Math.random() * 100) % 3;
}
function DisableInputs(){
    setTimeout(function(){ 
        $(Btn).removeClass("disabled");
        ClearGame();
    },1000);
    $(Btn).addClass("disabled");
}
function HumanChoice(){
    Btn.forEach(btn=>{
        btn.addEventListener('click',function(){
            var Human = parseInt(btn.getAttribute('data'));
            console.log(Human);
            var Computer = ComputerChoice();
            if(Human == 0){
                $(HumanScissorBtn).css("background-color",success);
            }else if(Human == 1){
                $(HumanPaperBtn).css("background-color",success);
            }else{
                $(HumanRockBtn).css("background-color",success);
            }    
            ScissorPaperRock(Computer,Human);
            if(Computer == 0){
                $(ComputerScissorBtn).css("background-color",success);
            }
            else if(Computer == 1){
                $(ComputerPaperBtn).css("background-color",success);
            }
            else{
                $(ComputerRockBtn).css("background-color",success);
            }

            $(ComputerChoiceText).html(Input[Computer]);
            $(HumanChoiceText).html(Input[Human]);
    
            console.log("Rock is Choosed  by you");
            if( CRounds == 1){
                console.log("Game Over..");
                GameOver();
            }
            CRounds--;
            console.log(CRounds);
        });
    });
    
}
function GameOver(){
    $(document.querySelector('#HumanScoreModal')).html(HScore);
    $(document.querySelector('#ComputerScoreModal')).html(CScore);
    $(GameOver_div).removeClass("d-none");
}
function ScissorPaperRock(ComputerChoice , HumanChoice){
    DisableInputs();
    if(ComputerChoice == 0){
        if(HumanChoice == 0){
            console.log("Game Draw with Scissor");
            $(ResultText).html("Game Draw");
            $(Result_div).css("background-color",dark);
            ScoreCardRefresh(2);
        }
        else if(HumanChoice == 1){
            console.log("Computer Won");
            $(ResultText).html("Computer Won");
            $(Result_div).css("background-color",danger);
            ScoreCardRefresh(0);
        }
        else{
            console.log("You Won");
            $(ResultText).html("You Won");
            $(Result_div).css("background-color",success);
            ScoreCardRefresh(1);
        }
    }
    else if(ComputerChoice == 1){
        if(HumanChoice == 0){
            console.log("You Won");
            $(ResultText).html("You Won");
            $(Result_div).css("background-color",success);
             ScoreCardRefresh(1);
        }
        else if(HumanChoice == 1){
            console.log("Game Draw with Paper");
            $(ResultText).html("Game Draw");
            $(Result_div).css("background-color",dark);
            ScoreCardRefresh(2);
        }
        else{
            console.log("Computer Won");
            $(ResultText).html("Computer Won");
            $(Result_div).css("background-color",danger);
             ScoreCardRefresh(0);
        }

    }
    else{
        if(HumanChoice == 0){
            console.log("Computer Won");
            $(ResultText).html("Computer Won");
            $(Result_div).css("background-color",danger);
             ScoreCardRefresh(0);
        }
        else if(HumanChoice == 1){
            console.log("You Won");
            $(ResultText).html("You Won");
            $(Result_div).css("background-color",success);
             ScoreCardRefresh(1);
        }
        else{
            console.log("Game Draw with Rock");
            $(ResultText).html("Game Draw");
            $(Result_div).css("background-color",dark);
            ScoreCardRefresh(2);
        }
    }
}
