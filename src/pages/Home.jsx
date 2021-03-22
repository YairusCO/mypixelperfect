import React, { Component } from 'react'
// import { connect } from 'react-redux'

import { TopContainer } from '../cmps/TopContainer'
import { MidContainer } from '../cmps/MidContainer'
import { ButtomContainer } from '../cmps/ButtomContainer'
class Home extends Component {
    render() {
        return (
            <div >
                
                <TopContainer />
                <MidContainer />
                <ButtomContainer />
            </div>
        )
    }
}

export default Home 
