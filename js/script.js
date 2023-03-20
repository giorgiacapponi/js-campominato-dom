// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const btnPlay = document.querySelector('.btn-play');
const container= document.querySelector('.container')
const select= document.querySelector('#level')

let num;
let singleCell;
const bombsArray=[];
let positionBomb;
   



// cosa succede al click su btn
btnPlay.addEventListener('click',totalCell)


// al click devo generare la griglia da 10
// il computer deve generare 16 numeri casuali singoli che saranno le bombe

function totalCell(){
        const nTotCell =numberCell(num);
        container.classList.remove('hidden')
    
   
        while (bombsArray.length<16){
            const nbombs =getRndInteger(1, num);
            if(!nbombs.includes ){
                bombsArray.push(parseInt(nbombs) )
            }
        }
        console.log(bombsArray);
        
        for (let i=0;i <bombsArray.length ;i++){
            positionBomb =bombsArray[i];
            console.log(positionBomb);
        }
        
    
   

    for(i=1;i<=num;i++){
        
        singleCell = document.createElement('div');
        singleCell.classList.add('cell')
        if (num ==100){
            singleCell.style.width=(`calc(100%/10)`)
            singleCell.style.height=(`calc(100%/10)`)
        }else if(num ==81){
            singleCell.style.width= (`calc(100%/9)`)
            singleCell.style.height=(`calc(100%/9`)
        }else if (num==49){
            singleCell.style.width=(`calc(100%/7)`)
            singleCell.style.height= (`calc(100%/7)`)
        }
        singleCell.innerHTML = `${i}`;
        singleCell.addEventListener('click',colorCell)
        container.append(singleCell);
       
    }
    return singleCell;
   
    

} 


// cosa succede al click su una cella
// se è buona si colora di green se cè una bomba di rosso
// function colorCell(){
//     this.classList.add('green');
//     console.log(parseInt(this.innerHTML) );
// }
function colorCell(){

    
    const numberCell= parseInt(this.innerHTML)
    
    if(numberCell == positionBomb){
        this.classList.add('red');
    }else{
        this.classList.add('green');
    }
   
    
   
}




// ////////////////////////////////////////////////////////////////////////////////////////////////
// in base al livello cambio n celle
function numberCell(){
    if (select.value == 100){
        num=100
    }else if( select.value ==81){
        num=81;
    }else if (select.value == 49){
        num= 49;
    }
    return num;
}

// genero 16 numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


