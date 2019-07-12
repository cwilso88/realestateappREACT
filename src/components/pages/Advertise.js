import React from 'react';

const Advertise = () => {
    const imgLink = "https://www.lemoptix.com/wp-content/uploads/ngg_featured/Are-You-Suitable-for-a-Career-in-Real-Estate-Picture-1200x480.jpg";
    
    return (
        <section className="section-container" id="advertise">
            <div className="pages-background-image">
                <h1>Sell Your Home Quickly</h1>

                <img src={imgLink} alt="Buy a home in Atlanta"/>
            </div>
            <article>
                <h2>About Atlanta RealEstate.com®</h2>
                <br></br>
                   <main>
                        Atlanta Real Estate also offers homeowners a bevy of useful tools and resources through the My Home℠ dashboard. My Home℠ dashboard allows property 
                        owners to manage their home like the important investment it is by tracking their home’s value over time, researching and managing home improvements, 
                        and scouting other similar properties in the neighborhood.
                   </main>
            </article>
        </section>
    )
}

export default Advertise;

