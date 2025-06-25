import React from 'react'

const FaqQuestion = ({number, question,answer}) => {
  return (
    <div className='w-full flex gap-2 sm:gap-8 lg:items-center items-start'>
        <h1 className='text-[#FF721F] text-[24px] sm:text-[54px] font-semibold'>{number}</h1>
        <div className='flex flex-col'>
            <p className='text-[20px] sm:text-[28px] font-semibold'>
                {question}
            </p>
            <p>
                {answer}
            </p>
        </div>

    </div>
  )
}

export default FaqQuestion