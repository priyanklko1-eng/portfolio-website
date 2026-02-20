import React, { useEffect, useState } from 'react'

const Textchange = () => {
  const texts = ["Hello, I am Priyank Sharma"]

  const [current, setCurrent] = useState("")
  const [endvalue, setEndvalue] = useState(0)
  const [isForward, setIsForward] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = texts[0]

      setCurrent(text.substring(0, endvalue))

      if (isForward) {
        setEndvalue(prev => prev + 1)
        if (endvalue === text.length) {
          setIsForward(false)
        }
      } else {
        setEndvalue(prev => prev - 1)
        if (endvalue === 0) {
          setIsForward(true)
        }
      }
    }, 120)

    return () => clearInterval(intervalId)
  }, [endvalue, isForward])

  return (
    <div className="font-mono text-5xl">
      {current}<span className="animate-pulse">|</span>
    </div>
  )
}

export default Textchange
