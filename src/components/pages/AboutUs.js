import React from 'react';

const AboutUs = () => {
    const imgLink = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/651334/600/400/m2/fpnw/wm0/atlanta03small-.jpg?1441996098&s=583b356665fedb0f12a8701b9c7df4fe";
    
    return (
        <section className="section-container" id="aboutUs">
            <div className="pages-background-image">
                <h1>Your Deams of Owning A Home Can Come True</h1>
                <article>
                <h2>About Atlanta RealEstate.com®</h2>
                <br></br>
                   <main>
                            For years, millions of home shoppers have turned to us to find their dream home. We offer a 
                        comprehensive list of for-sale properties, as well as the information and tools to make informed real estate decisions. Today, more than ever, 
                        Atlanta Real Estate is The Home of Home Search℠.

                        Atlanta Real Estate also offers homeowners a bevy of useful tools and resources through the My Home℠ dashboard. My Home℠ dashboard allows property 
                        owners to manage their home like the important investment it is by tracking their home’s value over time, researching and managing home improvements, 
                        and scouting other similar properties in the neighborhood.
                   </main>
            </article>

                <img src={imgLink} alt="Buy a house in Atlanta"/>
            </div>
        </section>
    )
}

export default AboutUs;
