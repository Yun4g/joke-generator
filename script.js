let displayBtn = document.querySelector('#btn');

let url = 'https://official-joke-api.appspot.com/random_joke  '

showInHtml = (joke)=>{
    document.querySelector('#joke').innerHTML = `${joke.setup} - ${joke.punchline}`
}

try {
    const getJokes = async ()=>{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    
        showInHtml(data);
    }
    
    
    displayBtn.addEventListener('click', getJokes)
    getJokes()
    
} catch (error) {
    console.error(error)
}




