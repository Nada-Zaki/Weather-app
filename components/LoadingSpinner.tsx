import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='spinner-border'></div>
    </div>
  )
}

export default LoadingSpinner