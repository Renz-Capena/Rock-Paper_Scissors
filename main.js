let image = document.getElementById('image');
let pick = document.getElementById('pick');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let result = document.getElementById('result');
let result_form = document.querySelector('.result');

let opponent_1_pick;
let opponent_2_pick;

rock.addEventListener('click',()=>{
    image.src= "img/rock.png";
    pick.innerHTML = "rock"
    opponent_1_pick = pick.innerHTML;
})

paper.addEventListener('click',()=>{
    image.src= "img/paper.png";
    pick.innerHTML = "paper"
    opponent_1_pick = pick.innerHTML;
})

scissor.addEventListener('click',()=>{
    image.src= "img/scissors.png";
    pick.innerHTML = "scissors"
    opponent_1_pick = pick.innerHTML;
})






//---------------------random pick

let random_btn = document.querySelector('.fight');

let word = ['rock','paper','scissors'];
let pick_2 = document.getElementById('pick_2');
let image_2 = document.getElementById('image_2');

let pick_result;


random_btn.addEventListener('click',()=>{

pick_2.innerHTML = word[Math.floor(Math.random() * 3 )];

opponent_2_pick = pick_2.innerHTML;

image_2.src = "img/"+opponent_2_pick+".png";

console.log(opponent_2_pick);

result_rps();

result_form.style.display = "block";
})



    function result_rps(){
        switch(opponent_1_pick){
            case "rock":
                if(opponent_2_pick === "rock"){
                    result.innerHTML = "Wow same pick!!!";
                }
                if(opponent_2_pick === "paper"){
                    result.innerHTML = "You Lose!! Try again!!";
                }
                if(opponent_2_pick === "scissors"){
                    result.innerHTML = "You Win!!";
                }
                break;
            case "paper":
                if(opponent_2_pick === "paper"){
                    result.innerHTML = "Wow same pick!!!";
                }
                if(opponent_2_pick === "scissors"){
                    result.innerHTML = "You Lose!! Try again!!";
                }
                if(opponent_2_pick === "rock"){
                    result.innerHTML = "You Win!!";
                }
                break;
            case "scissors":
                if(opponent_2_pick === "scissors"){
                    result.innerHTML = "Wow same pick!!!";
                }
                if(opponent_2_pick === "rock"){
                    result.innerHTML = "You Lose!! Try again!!";
                }
                if(opponent_2_pick === "paper"){
                    result.innerHTML = "You Win!!";
                }
                break;
        }
    }
