import React from 'react'

const FormField = ({
  Lablename,
  type,
  name,
  placeholder,
  value,
  handleChange,
  issurpriseme,
  handleSupriseMe
}) => {
  return (
    <div> 
    <div className='flex items-center gap-2 mb-2'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
        {Lablename}
      </label>
      {
        issurpriseme && (
          <button
          type='button'
          onClick={handleSupriseMe}
          className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise Me
          </button>
        )
      }
    </div>
    <input 
    type={type} 
    id={name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    required
    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-[#4649ff] focus:border-[#4649ff]
    outline-none block w-full p-3
    '
    />
    </div>
  )
}

export default FormField