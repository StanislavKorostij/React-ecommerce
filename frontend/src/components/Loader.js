import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '150px',
        height: '150px',
        margin: 'auto',
        display: 'block',
        position: 'absolute',
        top: '45%',
        right: '45%',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
