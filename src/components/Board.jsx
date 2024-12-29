import React, { useState } from 'react'
import Sqaures from './Sqaures'


let gametied;
function Board() {
  const [array,setArray]=useState(Array(9).fill(null))
  const [playerX,setPlayerX]=useState(true)

  const winnerPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  const checkWinner=()=>{
    for(let logic of winnerPattern){
      const [a,b,c]=logic
      if(array[a]!==null && array[a]===array[b] && array[b]===array[c]){
        return array[a]      
      }
      
    }
    return null
  }

 const winner=  checkWinner()

 const playAgain=()=>{
  setArray(Array(9).fill(null))
 }


 const tied=()=>{
  for(let i=0;i<array.length;i++){
    if(array[i]===null){
      return false;
    }
  }

  return true
}

gametied=tied()

 


  


  
  const handleClick=(num)=>{
    let arraycopy=[...array];
    if(arraycopy[num]===null){
      playerX?arraycopy[num]='X':arraycopy[num]='O';
      setPlayerX(!playerX);
    setArray(arraycopy);
    }
    
    
  }

  return (
    <>
    
    { winner||gametied?
   <div class="text-center mt-10">
   <p class="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text drop-shadow-lg">
     {winner ? `${winner} won the game!` : 'Game is tied!'}
   </p>
   <br />
   <button 
     onClick={playAgain} 
     class="mt-5 px-6 py-2 text-xl font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 transform transition-all duration-300 hover:scale-105">
     Play Again
   </button>
 </div>
 
    :
  <div>
      <div class="text-center mt-5">
  <h1 class="text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text drop-shadow-lg [font-family:'Pacifico',cursive] mb-10">
    Tic-Tac-Toe
  </h1>
</div>
<div className='absolute right-80 top-80'><p className='text-3xl text-pink-300 font-bold'>{playerX?`X's Turn`:`O's Turn`}</p></div>
      <div className='flex'>
        <Sqaures value={array[0]} onClick={()=>handleClick(0)}/>
        <Sqaures value={array[1]} onClick={()=>handleClick(1)}/>
        <Sqaures value={array[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className='flex'>
      <Sqaures value={array[3]} onClick={()=>handleClick(3)}/>
      <Sqaures value={array[4]} onClick={()=>handleClick(4)}/>
      <Sqaures value={array[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className='flex'>
      <Sqaures value={array[6]} onClick={()=>handleClick(6)}/>
      <Sqaures value={array[7]} onClick={()=>handleClick(7)}/>
      <Sqaures value={array[8]} onClick={()=>handleClick(8)}/>
      </div>
      <button
  className="mt-10 bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md 
             hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-pink-400"
  onClick={playAgain}
>
  Reset
</button>

    </div>
    
    }
    </>
  )
}

export default Board
