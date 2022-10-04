import React from 'react'
import { useState } from 'react'

export const useCounter = (initValue = 10) => {

    const [counter, setCounter] = useState(initValue);

    const add = (value = 1) => {
        setCounter(counter + value)
        console.log(value)
    }

    const decrement = (value = 1) => {
      if(counter === 1) return
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initValue)
    }

  return {
    counter,
    add,
    decrement,
    reset
  }
}
