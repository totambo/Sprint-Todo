import React from 'react';
import './Footer.css';

const Footer = ({theme, fontColor}) => {
    
    return (
       <footer className={fontColor}>
        <p>Full Stack Developer Bootcamp </p>
        <div className="createdBy">
            <p>Created by</p>
            <p className="name">Jhonatan Leyton</p>
        </div>
    </footer>
)}

export default Footer
