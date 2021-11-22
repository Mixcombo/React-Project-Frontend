import React from 'react';
import './About.css';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

function About() {

    return (
        <div>
            <div className="info">
                <h1>About</h1>
            </div>
            <div className="info2">
                <p>This webpage is using for Object Oriented Programming (OOP) project</p>
            </div>
            <div className="info">
                <h1>Information</h1>
            </div>
            <div className="info2">
                <p>Name: Wirawat Wiriyarungson</p>
                <p>Age: 19</p>
                <p>Study: King Mongkut's University of Technology North Bangkok (KMUTNB)</p>
                <p>Faculty: Applied Science</p>
                <p>Department: Computer Science (CS)</p>
                <b>Contacts:</b>
                <div className="info3"> 
                    <a className="facebook" href={"https://www.facebook.com/mixcombo.mixer"}>
                        <FaFacebook/> Wirawat Wiriyarungson</a>
                    <a className="instagram" href={"https://www.instagram.com/mixwrw_/"}>
                        <FaInstagram/> mixwrw_ </a>
                    <a className="line" href={"https://line.me/ti/p/~mixcombo"}>
                        <FaLine/> Mixcombo</a>
                </div>
            </div>
        </div>
    )
}

export default About;