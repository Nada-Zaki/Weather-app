import React, { Fragment } from 'react'
import Image from 'next/image'


const BackgroundImg = () => {
  return (
    <Fragment>
        <div className='position-fixed w-100 h-100' style={{zIndex:'-1', backgroundColor:'rgba(0,0,0,0.5)'}}></div>
        <div className='position-fixed w-100 h-100' style={{zIndex:'-2'}}>
            <Image src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80' alt='background' objectFit='cover' layout='fill' /> 
        </div>
    </Fragment>
  )
}

export default BackgroundImg