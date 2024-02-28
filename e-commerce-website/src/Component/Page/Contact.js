import React from 'react'
import '../Style/Contact.css'
import Navbar from '../Header/Navbar'
import ContactBox from '../component/ContactBox'

const Contact = () => {
    const backgroundColor = {

        backgroundColor: "transparent"

    }

    return (
        <>
            <section className="contact-section-1">
                <Navbar background={backgroundColor} />
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="contact-section-2">
                <h4>Have any queries?</h4>
                <h1>We're here to help.</h1>

                <div className="contact-box">
                    <ContactBox heading="Sales" info="Vestibulum ante ipsum primis in faucibus orci luctus." contact="1800 123 4567"/>
                    <ContactBox heading="Complaints" info="Vestibulum ante ipsum primis in faucibus orci luctus." contact="1900 223 8899"/>
                    <ContactBox heading="Returns" info="Vestibulum ante ipsum primis in faucibus orci luctus." contact="returns@mail.com"/>
                    <ContactBox heading="Marketing" info="Vestibulum ante ipsum primis in faucibus orci luctus." contact="1700 444 5578"/>
                </div>
            </section>
        </>
    )
}

export default Contact
