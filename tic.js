let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let winText = document.querySelector("#h1win");
let mainHide = document.querySelector("main");
let winDiv = document.querySelector("#win");
let newBtn = document.createElement("button");
newBtn.innerText="New Game";
newBtn.classList.add("new_game");
let turn0 = true;
let draw=0;
let arr = [[0, 1, 2,], [3, 4, 5,] , [6, 7, 8] , [0, 3, 6], [1, 4, 7] , [2, 5, 8] , [0, 4, 8],[2, 4, 6] ];
const reset = ()=>{
    draw=0;
    turn0 = true;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled= false;
    }) 
}
const newGame=()=>{
    reset();
    winDiv.classList.add("hide");
    mainHide.classList.remove("hide");
}
newBtn.addEventListener("click", newGame);
function winner_msg(winner){
    winText.innerText=`Congratulation! Player ${winner} wins`;
    winDiv.classList.remove("hide");
    mainHide.classList.add("hide");
    winText.after(newBtn);

}
function check_winner(){
    draw++;
    for (let i of arr){
        let val1 = boxes[i[0]].innerText;
        let val2 = boxes[i[1]].innerText;
        let val3 = boxes[i[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3 ){
                winner_msg(val1);
            }

        }
    }
}
resetBtn.addEventListener("click",reset);
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    if(turn0){
        box.innerText = "O";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    check_winner();
    if (draw === 9){
    winText.innerText= "It's a Draw. No Player wins ";
    winDiv.classList.remove("hide");
    mainHide.classList.add("hide");
    winText.after(newBtn); 
    }
    
})
}) 
