import React from 'react'
import Slider from './Slider'
import Container from '../Container'
import styles from '../../styles/Home/Hero.module.css'
const HeroSection = () => {
    return (
        <Container>
            <section className={styles.hero}>
                <div className={`${styles.textSection} text-gray-700`}>
                    <h1>One stop solution <span className='text-pink-500'>E-Store</span></h1>
                    <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
                    <button className={styles.ctabutton}>Shop Now</button>
                </div>
                <Slider />
            </section>
        </Container>
    )
}

export default HeroSection
