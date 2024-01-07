import React, { RefObject, useEffect, useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    // const refForm= useRef;

    
    // const sendEmail = (e: any) => {
    //     e.preventDefault();
    //     emailjs.sendForm(
    //         'gmail', 
    //         'template_d6obgha', 
    //         refForm, 
    //         'service_2d7on4e'
    //         ).then(
    //         () => {
    //             alert('Message Successfully sent!')
    //             window.location.reload();
    //         },
    //         () => {
    //             alert('Failed to send the message, Please try again in a few minutes')
    //         }
    //     )
    // }

  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">  
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n','t','a','c','t', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    I'm interested in freelance opportunities - especially ambitious or lage projects. If you have other requests or queations, don't hesitate to contact me by using the below form.
                </p>
                <div className="contact-form">
                    <form action="">
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name="message" id="" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Adarshi Perera
                <br/>
                Sri Lanka
                <br/>
                Boyagane, Kurunegala, 60000 <br/>
                <span>adarshi.perera6@gmail.com</span>
            </div>
            <div className="map-wrap">
            <MapContainer center={[7.451362, 80.34674]} zoom={15}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[7.451362, 80.34674]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
            </div>

        </div>
        <Loader active type='pacman' />
    </>
  )
}

export default Contact