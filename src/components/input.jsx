import React from 'react'

const input = ({
  onChange,
  value,
  icon,
  placeholder,
  type,
  className,
  required,
  pattern,
  title,
  maxLength,
  minLength,
  max,
  min,
  size
}) => {
  return (
    
    <div class="relative">
        <input
          required={required}
          pattern={pattern}
          min={min}
          max={max}
          maxLength={maxLength}
          minLength={minLength}
          title={title}
          className={className}
          size={size}
          type={type}
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        <span class="absolute inset-y-0 right-4 inline-flex items-center">
       {icon}
        </span>
      </div>
    
  )
}

export default input