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
    const gameText = () => {
        hold=targetArray()
        let divs = document.querySelectorAll('.gamebox')
        divs.forEach((div) => {
            div.addEventListener('click', e => {
              element = document.getElementById(e.target.id)
              element.textContent = "X"
              
            })
        })
        return{divs}
        }
    return{gameText}
}

const targetObject = Gameflow(newGrid)
console.log(targetObject.gameText())
// console.log(targetObject.targetArray())