'use client'

import { createShortURL } from '@/lib/actions'
import { isValidURL } from '@/utils'
import { Button, Input } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'

const Form = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(true)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const ref = useRef<HTMLFormElement>(null)
  const showError = inputValue.length > 0 && isDirty && hasError && !onFocus

  const handleChanges = (value: string) => {
    setInputValue(value)
    setHasError(!isValidURL(value))
  }

  const formAction = async (formData: FormData) => {
    await createShortURL(formData)
    ref.current?.reset()
    setIsDirty(false)
  }

  return (
    <form ref={ref} action={formAction} className={`w-[50%] min-w-80 max-w-[640px] flex gap-2 items-stretch ${!showError ? 'mb-4' : ''}`} >
      <Input
        name='longURL'
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
        <SubmitButton isDisabled={hasError} />
    </form>
  )
}

export default Form

const SubmitButton = ({ isDisabled } : { isDisabled: boolean } = { isDisabled: true } ) => {
  const { pending } = useFormStatus()
  return (
    <Button isDisabled={isDisabled} isLoading={pending} size='lg' color='primary' type='submit'> Shorten </Button>
  )
}