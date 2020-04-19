const gameBoard = (item, board) => {
    let container = () => document.getElementById(item)
    const makeGrid = () => {
        hold = container()
        for(i=0; i<=9; i++){
            XO = document.createElement('div')
            XO.id=i
            XO.classList.add("gamebox")
            hold.appendChild(XO)
            board.push(XO)
        }
        return{board}
        }       
return{makeGrid}
}

const newGrid = gameBoard('container', [])


const Gameflow = (boardObject) => {
    const targetArray = () => boardObject.makeGrid().board
    const toggleChoice = (choice) => !choice 
    const gameText = () => {
        hold=targetArray()
        let divs = document.querySelectorAll('.gamebox')
        let placeHolder = toggleChoice()
        divs.forEach((div) => {
            div.addEventListener('click', e => {
              element = document.getElementById(e.target.id)
                if(placeHolder==true){
                    element.textContent = "X"
                    console.log(placeHolder)
                } else if(placeHolder==false){
                    element.textContent = "O"
                    console.log(placeHolder)
                }
                
                placeHolder=!placeHolder
            
            })
        })
        return{divs}
        }
    return{gameText}
}

const targetObject = Gameflow(newGrid)
console.log(targetObject.gameText())


// console.log(targetObject.targetArray())

// if(element.className=="gamebox"){
            //     // element.className=="X"}
            //     // else{
            //     //     element.className=="O"

            //     if(element.classList.includes('X')){
            //         element.classList.remove('')
            //     }
            //     }