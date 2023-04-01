import React from 'react'

const ErrorNotification: React.FC<{text:string}> = (props) => {
  return (
    <div className='shadow rounded fixed-bottom p-2 bg-danger text-white text-center' >
        {props.text}
    </div>
  )
}

export default ErrorNotification