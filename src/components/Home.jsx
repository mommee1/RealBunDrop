import React from 'react';

function Home() {
    const backgroundImageUrl = "http://localhost:3000/images/background.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100vh"

        /* Add additional background properties as needed */
    };

    return (
        <div className="container" style={containerStyle}>
            <h1 className='homeText'>Welcome to Bun Drop!</h1>
            <p className='homeText'>Burgers by drone!</p>
        </div>
    );
}

export default Home;
