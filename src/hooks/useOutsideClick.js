import { useEffect, useRef } from 'react'

export function useOutsideClick({ action }) {
  const ref = useRef()

  useEffect(() => {
    function handleClick(e) {
      if (!navigator.onLine) {
        return
      }

      if (ref.current && !ref.current.contains(e.target)) {
        action()
      }
    }

    // Capturing Phase - event starts at the root of the DOM tree and propagates down
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [action])

  return ref
}
