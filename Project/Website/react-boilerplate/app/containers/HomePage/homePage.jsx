import React from 'react';
import './homePage.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import TextContainer from '../../components/textContainer/textContainer'
import config from '../../data/config';

export default function Homepage(props) {

    return (
        <div>
            <div className="bg">
                <Header />
                <div className="container">
                    <p></p>
                    {props.data.map(textArea => (<TextContainer key={textArea.id} title={textArea.title} text={textArea.text} />))}
                </div>
                <Footer author={config.AUTHOR} />
            </div>
        </div>
    );
}