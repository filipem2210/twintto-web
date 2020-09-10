import React from 'react'

import Tweet from '../Tweet'

import { Container, Tweets } from './styles'

export default function Feed() {
  return (
    <Container>
      <Tweets>
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
          name="Gabs Ferreira"
          user="@o_gabsferreira"
          date="20 de mai"
          description="Entendendo a web em 4 passos simples"
          image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
          comments="15"
          retweets="281"
          likes="1,3 mil"
          retweet
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
          name="talita souza"
          user="@souzatali7"
          date="10 de set"
          description="queria ta tirando uma soneca com o ar condicionado no talo"
          image=""
          comments=""
          retweets=""
          likes="1"
        />
      </Tweets>
    </Container>
  )
}
