'use client'

import { isValidURL } from '@/utils'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

const Form = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(true)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const showError = isDirty && hasError && !onFocus

  const handleChanges = (value: string) => {
    setInputValue(value)
    setHasError(!isValidURL(value))
  }

  return (
    <form className={`w-[50%] min-w-80 max-w-[640px] flex gap-2 items-stretch ${!showError ? 'mb-4' : ''}`}>
      <Input
        className='w-full'
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90",
            "placeholder:text-default-700/70",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-md",
            "bg-white/60",
            "backdrop-blur-2xl",
            "backdrop-saturate-200",
            "hover:bg-white/70",
            "group-data-[focused=true]:bg-default-200/50",
            "!cursor-text",
          ],
        }}
        type="url"
        size='lg'
        color='primary'
        placeholder='Enter a link to shorten it'
        labelPlacement='outside'
        onValueChange={handleChanges}
        onFocus={() => setOnFocus(true)}
        onBlur={() => {setOnFocus(false); setIsDirty(true); }}
        isInvalid={showError}
        errorMessage={showError ? "URL not valid" : ' '}
        value={inputValue}
        variant='faded'
        />
        <Button isDisabled={hasError} size='lg' color='primary' type='submit'> Shorten </Button>
    </form>

  )
}

export default Form