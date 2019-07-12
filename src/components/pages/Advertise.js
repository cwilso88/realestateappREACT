import React from 'react';

const Advertise = () => {
    const imgLink = "https://www.lemoptix.com/wp-content/uploads/ngg_featured/Are-You-Suitable-for-a-Career-in-Real-Estate-Picture-1200x480.jpg";
    
    return (
        <section className="section-container" id="advertise">
            <div className="pages-background-image">
                <img src={imgLink} alt="Buy a home in Atlanta"/>
            </div>
            <article>
                <h1>Sell Your Home Quickly</h1>
                <br></br>
                   <main>
                        <p>
                                Good marketing can bring higher prices in a seller's 
                            market and it can mean the difference between "sold" 
                            or "expired" in a buyer's market. Good marketing might 
                            not sell your house but it will make the phone ring and 
                            if buyers don't call, you won't sell.
                        </p>
                        <br/>
                        <p>
                                    A good virtual tour will grab a buyer by the hand and 
                            lead her from room to room, whether it's 360 or a video. 
                            Depending on the tour company, you can add sound, music, 
                            or an exciting, professionally written description that 
                            scrolls with the movement of the tour.
                        </p>
                   </main>
            </article>
        </section>
    )
}

export default Advertise;

