export const GameBoard = ( ()=>{ 
    // personne ne peut toucher directement à l'objet GameBoard, il faut passer par les méthodes
    let board = ["", "", "", "", "", "", "", "", ""];

    //retourne une copie du tableau _board
    const getBoard = ()=> [...board]

    //place un symbole sur une case si elle est vide
    const placeMark = (index, mark)=>{
        //vérifier si index est valide
        if(index < 0 || index > 8 || board[index] !== "") {            
            return  false;
        }
        else{
            board[index] = mark;
            return true;
        }
       
    };

    //remet le tableau _board à son état initial
    const resetBoard = ()=>{
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {getBoard, placeMark, resetBoard}
}
)();


//les joueurs
export const createPlayer = (name, mark) => {
    let score = 0;

    const getScore = () => score;
    const addPoint = () =>{
        score++;
    }
    return {name, mark, getScore, addPoint}
};

