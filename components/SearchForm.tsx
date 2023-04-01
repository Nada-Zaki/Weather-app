import React, { useRef } from 'react'
import { useContext } from 'react'
import { weatherContext } from '../store/weather-context'
import { BsSearch } from 'react-icons/bs'
import { FormEvent } from 'react'
import classes from './SearchForm.module.css'

const SearchForm: React.FC = () => {
  const weatherCtx = useContext(weatherContext);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    weatherCtx.fetchData(cityInputRef.current!.value);
  }
  
  return (
    <div className='row d-flex justify-content-center p-4'>
      <div className='col-md-7 col-xs-10'>
        <form onSubmit={submitHandler} className='border rounded d-flex px-2'>
            <input 
              className={`${classes['form-control']} form-control text-white bg-transparent border-0 shadow-none`}
              type='text' 
              ref={cityInputRef}
              placeholder='Search City'
              required />
            <button className='btn shadow-none'>
                <BsSearch size={15} color='white' />
            </button>
        </form>
        </div>
    </div>
  )
}

export default SearchForm