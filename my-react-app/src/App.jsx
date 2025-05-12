import { useState } from 'react'

const user = {
  name: 'jae',
  age: 14,
  weight: 1,
  height: 'tall',
}


function App() {
  const [weight, setWeight] = useState(user.age);
  
  function gainWeight () {
    setWeight(user.age += 1);
  }

  function loseWeight () {
    setWeight(user.age-= 1);
  }

  function resetWeight () {
    setWeight(user.age = 14)
  }

  return (
    <>
      <div className='w-full h-screen flex items-center flex-col justify-center text-neutral-50 bg-neutral-900'>
        <button className='text-neutral-50 my-7 text-3xl'>{user.age <= 0 ? `Jae is dead 🥳` : `Jae's age is ${user.age}`}</button>
        <div className='mb-2 flex items-center justify-center w-full'>
        <button onClick={gainWeight} className='cursor-pointer mr-7 border-2 rounded-xl text-neutral-700 bg-neutral-100 text-xl  px-10 py-3'>Add</button>
        <button onClick={loseWeight} className='cursor-pointer border-2 rounded-xl text-neutral-700 bg-neutral-100 text-xl  px-10 py-3'>Subtract</button>
        </div>
        {user.age <= 0 && <button onClick={resetWeight}  className='cursor-pointer border-2 rounded-xl text-neutral-700 bg-neutral-100 text-xl  px-10 py-3'>Restart</button>}
      </div>
    </>
  );
}

export default App