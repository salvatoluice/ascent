import React from 'react'
import { Link } from 'react-router-dom'

const Spares = () => {
  return (
    <div>
      <h2 className='text-center text-2xl font-semibold'>We stock genuine car parts for Toyota and all major brands</h2>
      <p className='text-center py-4 text-gray-400'>Explore collection below. Free deliveries within Nairobi CBD.</p>
      <div className='flex flex-wrap w-full justify-center gap-8'>
        <Link to={'/spares/toyota'} className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1611919006980-8d937d6dfd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8VG95b3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
            <p className='font-semibold'>Toyota</p>
        </Link>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1583870908951-71149f42bcf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>Mercedes</p>
        </div>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1538690560694-c770d02e202c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>BMW</p>
        </div>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>Audi</p>
        </div>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1619462807672-3c66156eb156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1YmFydXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>Subaru</p>
        </div>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1592399438478-4d4e2664a323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1pdHN1YmlzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>Mitsubishi</p>
        </div>
        <div className='flex flex-col gap-1 shadow shadow-gray-500 rounded-sm p-2 text-center hover:shadow'>
            <img className='w-48 h-48 object-cover' src="https://images.unsplash.com/photo-1615849577141-3397907d4ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='font-semibold'>Mazda</p>
        </div>
      </div>
    </div>
  )
}

export default Spares
