import React from 'react';
import config from '../../data/config';

export default function Footer(props) {
    return (
        <footer className="bg-dark ">
            <div className="footer-copyright text-center py-3 text-light customFooter">© 2018 Copyright:
                <span> {config.AUTHOR}</span>
            </div>
        </footer>
    );
}