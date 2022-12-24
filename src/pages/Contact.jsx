import React from 'react';
import ContactIcons from '../components/ContactIcons';


function Contact(props) {

    return (
        <div id="main" className='lists'>
            <article className='post'>
                <header>
                    <div className='title'>
                        <h2>Contact</h2>
                    </div>
                </header>
                <p className='contact'>My inbox is always open. Would love to chat about projects, interests, work or life. Email me at:</p>
                <a href="mailto:spaul2@stanford.edu">spaul2@stanford.edu</a>
                <ContactIcons />
            </article>
        </div>


    )
}

export default Contact;