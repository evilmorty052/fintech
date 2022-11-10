import React from 'react'

const input = ({onChange, value, icon, placeholder, type, className}) => {
  return (
    
    <div class="relative">
        <input
          className={className}
          type={type}
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        <span class="absolute inset-y-0 left-4 inline-flex items-center">
       {icon}
        </span>
      </div>
    
  )
}

export default input