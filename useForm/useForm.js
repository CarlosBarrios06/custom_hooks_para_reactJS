import React from 'react'
import { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const onInputChange = ({ target }) => {

    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    })

  }

  const onReset = () => {
    setFormState(initialValue);
  }

  return {
    onInputChange,
    // formState
    ...formState,
    onReset
  }
}

export default useForm
