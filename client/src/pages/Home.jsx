import React from 'react'

const Home = () => {
  return (
    <>
    <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <p>we are the world best IT company</p>
            <h1>Welcome to Shivani Tech</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit sed quos, impedit neque voluptatum possimus praesentium vel nostrum numquam odio illum libero recusandae minima corrupti at! Quia, facilis vel.</p>
            <div className='btn btn-group'>
              <a href='/contact'>
                <button className='btn'>Connect Now</button>
              </a>
              <a href='/service'>
                <button className='btn secondary-btn'>Learn More</button>
              </a>
            </div>
          </div>
          <div className="hero-image" >
            <img src='/Images/home.png' alt="Let's code together" width={500} height={400} />
          </div>
        </div>
      </section>
    </main>
    <section className='section-analytics'>
      <div className='container grid grid-four-cols'>
        <div className='div1'>
          <h2>50+</h2>
          <p>registered companies</p>
        </div>
        <div className='div1'>
          <h2>100,00+</h2>
          <p>Happy Clients </p>
        </div>
        <div className='div1'>
          <h2>500</h2>
          <p>Well known Developers</p>
        </div>
        <div className='div1'>
          <h2>24/7</h2>
          <p> Services</p>
        </div>
      </div>
    </section>
    <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-image" >
            <img src='/Images/Design.png' alt="Let's code together" width={500} height={400} />
          </div>
          <div className="hero-content">
            <p>we are here to help you</p>
            <h1>Lets Get Started</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates placeat at tempora quaerat doloremque ab, suscipit magni consectetur neque, ex recusandae rem impedit explicabo voluptatum esse accusantium quas. Minima, nihil! Aspernatur molestias inventore qui id quos ad, sit neque architecto quibusdam dolores alias ipsum eaque reiciendis, esse asperiores error labore.</p>
          </div>
          
        </div>
      </section>
    </>
      
  )
}

export default Home
