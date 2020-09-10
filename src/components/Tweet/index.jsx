import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Comments,
  CommentIcon,
  Retweets,
  RetweetsIcon,
  Likes,
  LikeIcon,
  Actions,
  UploadIcon
} from './styles'

export default function Tweet({
  avatar,
  name,
  user,
  date,
  description,
  image,
  comments,
  retweets,
  likes,
  retweet
}) {
  return (
    <Container>
      {retweet && (
        <Retweeted>
          <RetweetIcon />
          <span>Você retweetou</span>
        </Retweeted>
      )}
      <Body>
        <Avatar src={avatar} />

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{user}</span>
            &nbsp;&middot;&nbsp;
            <time>{date}</time>
          </Header>

          <Description>{description}</Description>

          {image && <ImageContent src={image} />}

          <Icons>
            <Comments>
              <CommentIcon />
              {comments}
            </Comments>
            <Retweets>
              <RetweetsIcon />
              {retweets}
            </Retweets>
            <Likes>
              <LikeIcon />
              {likes}
            </Likes>
            <Actions>
              <UploadIcon />
            </Actions>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

Tweet.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  comments: PropTypes.number,
  retweets: PropTypes.number,
  likes: PropTypes.number,
  retweet: PropTypes.bool
}
