import React from 'react'

export default function Footer(props) {
    return (
        <footer className="bg-dark">
            <div className="footer-copyright text-center py-3 text-light">© 2018 Copyright:
                <span> {props.author}</span>
            </div>
        </footer>
    );
}