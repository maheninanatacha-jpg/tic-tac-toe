export const createPlayer = (name, mark) => {
    let score = 0;

    const getScore = () => score;
    const addPoint = () =>{
        score++;
    }
    return {name, mark, getScore, addPoint}
};