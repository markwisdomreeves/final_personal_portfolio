import React from 'react'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'


const AutoTyped = () => (

  <>
    <AutoTyping
      active
      textRef='Mark Wisdom Reeves'
      writeSpeed={200}
      deleteSpeed={100}
      delayToWrite={10}
      delayToDelete={1000}
      id="auto_type_custom_style"
    />
    <BlinkCursor
      active
      blinkSpeed={500}
      id="auto_type_custom_blinkCursor"
    />
  </>
)


export default AutoTyped;
