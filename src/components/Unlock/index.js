// Write your code here
import {useState} from 'react'

import {BgContainer, Img, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const changeLock = () => setLock(prevState => !prevState)

  const lockView = () => (
    <>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        alt="lock"
      />
      <Paragraph>Your Device is Locked</Paragraph>
      <Button type="button" onClick={changeLock}>
        Unlock
      </Button>
    </>
  )

  const unlockView = () => (
    <>
      {' '}
      <Img
        src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        alt="unlock"
      />
      <Paragraph>Your Device is Unlocked</Paragraph>
      <Button type="button" onClick={changeLock}>
        Lock
      </Button>
    </>
  )

  return <BgContainer>{lock ? lockView() : unlockView()}</BgContainer>
}

export default Unlock
