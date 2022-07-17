import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
const Chat = () => {
    return (
        <main className='bg-gray-900 h-screen  pt-20'>
            <div className='max-w-7xl mx-auto grid grid-cols-12 px-5 gap-y-6'>
                <div className='col-span-3'>
                    <div className='rounded-full py-4 bg-white flex items-center space-x-5'>
                        <SearchIcon className='h-5 w-5 text-gray-500 ml-5' />
                        <input type="text" placeholder='Buscar' />
                    </div>
                </div>
                <div className='col-span-9 flex justify-end items-center'>
                    <div>
                        <button className='bg-white text-gray-600 font-semibold py-2 px-3 rounded-full '>Borrar Chat</button>
                    </div>
                </div>
                <div className='col-span-3 bg-slate-800 '>
                    <div className='text-white flex justify-between border-b p-3 pb-3'>
                        <div className='flex space-x-2'>
                            <a href="#" className="block relative">
                                <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                                <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full">
                                </span>
                            </a>
                            <div >
                                <p className='text-lg'>Anthoni </p>
                                <p className='text-sm'>Hi, I am the best.</p>
                            </div>
                        </div>

                        <div>
                            <p className=''>09:00 </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default Chat