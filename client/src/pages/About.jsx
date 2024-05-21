import React from 'react'
import Analytics from '../components/Analytics'
import { useAuth } from '../store/auth'

const About = () => {
  const {user}= useAuth();
  return (
    <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <p>Welcome, { user ? `${user.username} to our Website` : "to our Website"
              } !! </p>
            <h1>Why Choose Us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit sed quos, impedit neque voluptatum possimus praesentium vel nostrum numquam odio illum libero recusandae minima corrupti at! Quia, facilis vel.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam obcaecati enim dicta ad, a ut.lorem</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum ex magnam maxime. Nisi, suscipit nostrum. Autem commodi aspernatur sint iusto inventore similique voluptatem quibusdam?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias, ipsa id fugit odio quod odit eligendi quaerat dolorum.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque cumque ad, sequi alias nisi, recusandae totam atque iusto voluptatem, doloremque aut!</p>
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
            <img src='/Images/About.png' alt="Let's code together" width={500} height={500} />
          </div>
        </div>
      </section>
      <Analytics/>
    </main>
    
  )
}

export default About
