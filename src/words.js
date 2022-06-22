const words=['HOST','ORANGE','BROWSER'];

const getRandomWords=()=>{
    return  words[Math.floor(Math.random()* words.length)];
}

export default getRandomWords;