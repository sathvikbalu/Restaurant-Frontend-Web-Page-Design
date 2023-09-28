import React from 'react'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Food website</h1>
            <p>Best Food in India</p>
            <Link to="/menu"><button>
              ORDER NOW
            </button></Link>
            
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
