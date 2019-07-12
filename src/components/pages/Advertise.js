import React from 'react';

const Advertise = () => {
    const imgLink = "https://success.realtor.com/cp/uploads/default/files/0a88cf9ec87170b3a0b194806314c96d.gif";
    
    return (
        <section className="section-container" id="advertise">
            <div className="pages-background-image">
                <img src={imgLink} alt="Buy a home in Atlanta"/>

                <h1>Real Estate Marketing</h1>
            </div>
            
            <article>
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
                   <h4>Please contact our marketing experts.
                   <i className="mobile alternate icon"></i>
                   </h4> 
            </article>
        </section>
    )
}

export default Advertise;

