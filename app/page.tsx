'use client'

import Slider from '@/app/components/Slider'

export default function Home() {
  return (
    <div>
      <div className="title">
        <h1 className='text-center font-bold text-violet-700 text-3xl mb-6'>Home</h1>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  )
}
