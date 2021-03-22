import React from 'react'
import item1 from '../assets/images/homepage/menu-items/menu-item1.jpg'
import item2 from '../assets/images/homepage/menu-items/menu-item2.jpg'
import item3 from '../assets/images/homepage/menu-items/menu-item3.jpg'

export function MidContainer() {
    return (
        <div className="mid-container">

            <div className="main-layout flex">
                <div className="main-container">
                    <div className="left-container">
                        <h2>A few highlights from our menu</h2>
                        <p className="fs18">We cater for all dietary requirements,
                        but here’s a glimpse at some of our diner’s favourites.
                           Our menu is revamped every season.</p>
                    </div>
                    <div className="right-container">
                        <div className="menu-items">
                            <div>
                            <img src={item1} />
                            </div>
                            <div className="menu-items-r">
                            <h4 className="fs18">Seared Salmon Fillet</h4>
                            <p>Our locally sourced salmon served</p>
                            <p>with a refreshing buckwheat summer salad.</p>
                            </div>
                            
                        </div>
                        <div><hr/></div>
                        <div className="menu-items">
                        <div>
                            <img src={item2} />
                            </div>
                            <div className="menu-items-r"> 
                            <h4 className="fs18">Rosemary Filet Mignon</h4>
                            <p className="fs15">Our prime beef served to your taste with a</p>
                            <p className="fs15">delicious choice of seasonal sides.</p>
                            </div>
                            
                        </div>
                        <div><hr/></div>
                      
                        <div className="menu-items">
                        <div>
                            <img src={item3} />
                            </div>
                            <div className="menu-items-r">
                            <h4 className="fs18">Summer Fruit Chocolate Mousse</h4>
                            <p className="fs15">Creamy mousse combined with summer</p>
                            <p className="fs15">fruits and dark chocolate shavings.</p>
                            </div>
                      
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
