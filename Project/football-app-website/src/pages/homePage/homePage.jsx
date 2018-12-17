import React from 'react';
import './homePage.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import TextContainer from '../../components/textContainer/textContainer'

export default function Homepage(props) {

    return (
        <div>
            <div className="bg">
            <Header/>
            <div className="container">
            <p></p>
            <TextContainer title={props.aboutTitle} text={props.aboutText}/>
            <TextContainer title={props.startedTitle} text={props.startedText}/>
            <TextContainer title={props.startedTitle} text={props.startedText}/>
            <TextContainer title={props.startedTitle} text={props.startedText}/>
            <TextContainer title={props.startedTitle} text={props.startedText}/>
            </div>
            <Footer author={props.author}/>
            </div>
        </div>
    );
}