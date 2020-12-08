import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234447.11326170253!2d85.18123884494122!3d23.343457742902288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1606917352786!5m2!1sen!2sin" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen 
                title="Location"
            >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;