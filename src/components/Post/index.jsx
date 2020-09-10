import React, { useEffect } from 'react'

import {
  Container,
  Avatar,
  Wrapper,
  Tweet,
  Actions,
  Icons,
  Icon,
  PictureIcon,
  GifIcon,
  GraphIcon,
  SmileIcon,
  ScheduleIcon,
  PostTweetButton
} from './styles'

const maxLength = 280

export default function Post() {
  const autoExpand = function (field) {
    field.style.height = 'inherit'
    var computed = window.getComputedStyle(field)
    var height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10)

    field.style.height = height + 'px'
  }

  useEffect(() => {
    document.addEventListener(
      'input',
      function (event) {
        if (event.target.tagName.toLowerCase() !== 'textarea') return
        autoExpand(event.target)
      },
      false
    )
    return () =>
      document.removeEventListener(
        'input',
        function (event) {
          if (event.target.tagName.toLowerCase() !== 'textarea') return
          autoExpand(event.target)
        },
        false
      )
  })

  return (
    <Container>
      <Avatar src="https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg" />
      <Wrapper>
        <Tweet placeholder="O que está acontecendo?" maxLength={maxLength} />
        <Actions>
          <Icons>
            <Icon>
              <PictureIcon />
            </Icon>
            <Icon>
              <GifIcon />
            </Icon>
            <Icon>
              <GraphIcon />
            </Icon>
            <Icon>
              <SmileIcon />
            </Icon>
            <Icon>
              <ScheduleIcon />
            </Icon>
          </Icons>
          <PostTweetButton>Tweetar</PostTweetButton>
        </Actions>
      </Wrapper>
    </Container>
  )
}
