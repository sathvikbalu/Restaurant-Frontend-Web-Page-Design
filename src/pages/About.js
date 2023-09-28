import React from 'react'
import Layout from '../components/layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <div>
      <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:'2rem'
          },
          "& p":{
            textAlign:"justify"
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem',

            }
          }

        }}>
          <Typography variant='h4'>
            Welcome to my restaurant
          </Typography>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut qui dolorum, et suscipit nesciunt odio sapiente corporis? A repellendus iusto corrupti temporibus numquam corporis mollitia sint quam, itaque ipsam magni voluptatum ipsum, eum tenetur libero est praesentium. Cumque dolorum quia ducimus nulla fugiat dolores esse quod, inventore, eum eos in cum dolor iusto. Mollitia natus neque corrupti corporis fugit non quos eos assumenda rem, quidem ut ducimus, debitis harum asperiores nihil explicabo minus excepturi! Hic eaque laborum vero, assumenda omnis, aspernatur nihil expedita ad ipsum fugit dolores doloribus. Rerum deleniti iure facilis? Explicabo ab fugit dicta placeat delectus velit error!

          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat nulla rem consequuntur, illo voluptas autem ut cum culpa nam doloremque molestiae totam fugit non aut similique aperiam aliquid provident reprehenderit reiciendis illum. Fugit natus laborum voluptatibus voluptatum? Repellendus, rem odit. Consequuntur dolorum ducimus ad odio fugiat! Quae amet eos esse necessitatibus voluptas ratione fuga. Libero in pariatur vero laudantium, quia id facere maiores dolor. Architecto expedita eum, odio nostrum delectus eaque ipsam? Nulla a nemo temporibus, sapiente dignissimos magni debitis ipsam dolor exercitationem? Eveniet reiciendis culpa quis, ipsam et odio dolorem aspernatur assumenda sed beatae itaque corporis aliquid accusantium.
          </p>

        </Box>
      </Layout>
    </div>
  )
}

export default About
