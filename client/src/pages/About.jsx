import React from 'react'

const About = () => {
  return (
    <div className='my-4'>
      <div className='flex about gap-4 md:flex-col sm:flex-col'>
        <div style={{width: '100%'}} className='flex'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
        </div>
        <div className='flex flex-col gap-2' style={{width:'100%'}}>
            <h2 className='text-2xl underline font-bold'>About Us</h2>
            <p className='text-gray-500'>Welcome to Ascent, your go-to car rental and ride-sharing platform. At Ascent, we connect car owners with clients who are in need of a ride or looking to rent a car. We also offer an online store where clients can purchase spare parts for their vehicles.</p>
            <p className='text-gray-500'>Our mission at Ascent is to provide a safe, reliable, and affordable means of transportation for everyone. We understand that owning a car can be expensive and that not everyone has the financial means to do so. That's why we've created a platform where car owners can rent out their vehicles to clients who are in need of a ride.</p>
            <p className='text-gray-500'>Whether you need a car for a day, a week, or longer, Ascent has got you covered. Our rental process is easy and convenient, and our cars are well-maintained and serviced regularly. Our ride-sharing service is also a great option for those who prefer to ride rather than drive.</p>
            {/* <p>In addition to our rental and ride-sharing services, we also offer an online store where clients can purchase spare parts for their vehicles. Our parts are of high quality and come with a warranty, ensuring that your vehicle remains in top condition.</p>
            <p>At Ascent, we value our clients and strive to provide exceptional customer service. Our team of experts is always available to assist you with any questions or concerns you may have. We take pride in our work and are committed to providing a seamless experience for all our clients.</p> */}
        </div>
      </div>
    </div>
  )
}

export default About
