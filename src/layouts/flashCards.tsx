import { useState } from 'react'
import '../App.css'
import { flashCards } from '../CONSTANT'

export default function FlashCardLayout() {
  const [count, setCount] = useState(0)
  const total=flashCards.length
  const progress=Math.min((count/total)*100,100).toFixed(0)
  const [showAnswer,setShowAnswer]= useState(false)
  const currentCard=flashCards[count]


  return (
    <div className='w-full justify-center flex'>
        <div className='w-1/2'>
      <div className=''>
        <p className='font-bold justify-self-start'>Flash Cards</p>
         <div className="w-full bg-white  dark:bg-gray-700 border-2 h-10 justify-center rounded-[10px] relative border-gray-200 p-1">
            <p className='absolute right-3 z-2 font-bold'> {count+1} of {total} </p>
    <div className=" text-xs font-medium  text-center leading-none bg-gray-200  h-full rounded-[10px] relative " style={{width:`${progress}%`}}>
        <p className='absolute right-[-30px] top-[7px] font-bold'>{progress}%</p></div>

  </div>
</div>


      <div className="border-gray-200 border-2 m-2 rounded-[15px] h-[300px] justify-center items-center flex-col flex relative  ">
        <div onClick={() => setShowAnswer(!showAnswer)} className='mb-20 cursor-pointer w-1/2'>
        {showAnswer ? <p className='font-bold text-2xl'>{currentCard.answer}</p> : <h1>{currentCard.question}</h1>}
        </div>
        <div className='rounded-[10px] absolute bottom-0 '>
            <button onClick={() => setCount(Math.max(0,count-1))} disabled={count === 0} className='m-5 mr-20'>Previous</button>
            {showAnswer ? "Answer" : "Question"}
            <button onClick={() => {setCount(Math.min(count+1,total-1));
                 setShowAnswer(false)}} className='m-5 ml-20'>Next</button>

        </div>

      </div>
      </div>
    </div>
  )
}
