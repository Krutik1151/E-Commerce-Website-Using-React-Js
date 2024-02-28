import React from 'react'
import Navbar from '../Header/Navbar'
import "../Style/About.css"
import Team_box from '../component/Team_box'
import Stor from '../component/Stor'

const About = () => {
    const backgroundStyle = {

        backgroundColor: 'transparent'

    }
    return (
        <>
            <section className="about-section-1">
                <Navbar background={backgroundStyle} />
                <div className="sec-1-heading">
                    <h1>ABOUT US</h1>
                </div>
            </section>


            <section className="about-section-2">

                <div className="about-sec-two-container">
                    <div className="about-left">

                        <div className="about-left-heading">
                            <h1>Who We Are</h1>
                        </div>
                        <div className="about-left-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                        </div>

                    </div>
                    <div className="about-right">
                        <img src="./img/about-2.webp" alt="" />
                    </div>
                </div>


            </section>


            <section className="about-section-3">

                <div className="team-heading">
                    <h4>A Few Words About</h4>
                    <h1>Our Team</h1>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </div>

                <div className="team-box-container">
                    <Team_box img={'./img/team-1.png'} name="Harvey Spector" post='Founder - CEO' />
                    <Team_box img={'./img/team-2.png'} name="Jessica Pearson" post='COO' />
                    <Team_box img={'./img/team-3.png'} name="Rachel Zain" post='Marketing Head' />
                </div>
                <div className="team-box-container">
                    <Team_box img={'./img/team-4.png'} name="Luise Litt" post='Lead Developer' />
                    <Team_box img={'./img/team-5.png'} name="Katrina Bennett" post='Intern Designer' />
                    <Team_box img={'./img/team-6.png'} name="Mike Ross" post='Intern Designer' />
                </div>

            </section>


            <section className="about-section-4">
                <div className="about-sec-4-container">
                    <div className="about-follow-content">

                        <h1>Follow Us</h1>

                        <div className="about-icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-google"></i>
                        </div>
                    </div>
                </div>
            </section>


            <div className="sec-6-container">
                <Stor img="./img/stor-1.png" title="Worldwide Shipping" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                <Stor img="./img/stor-2.png" title="Best Quality" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                <Stor img="./img/stor-3.png" title="Best Offers" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                <Stor img="./img/stor-4.png" title="Secure Payments" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            </div>


        </>
    )
}

export default About
