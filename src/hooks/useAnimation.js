import { useState, useEffect } from 'react'

const useAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationType, setAnimationType] = useState('dance')

  // 키보드 접근성을 위한 이벤트 리스너
  useEffect(() => {
    const handleKeyPress = (event) => {
      // 스페이스바로 재생/정지 토글
      if (event.code === 'Space' && event.target.tagName !== 'BUTTON') {
        event.preventDefault()
        setIsPlaying(prev => !prev)
      }

      // 숫자 키로 애니메이션 타입 변경
      const animationMap = {
        'Digit1': 'dance',
        'Digit2': 'bounce',
        'Digit3': 'spin',
        'Digit4': 'shake'
      }

      if (animationMap[event.code]) {
        setAnimationType(animationMap[event.code])
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const toggleAnimation = () => {
    setIsPlaying(prev => !prev)
  }

  const changeAnimationType = (type) => {
    setAnimationType(type)
  }

  return {
    isPlaying,
    animationType,
    toggleAnimation,
    changeAnimationType
  }
}

export default useAnimation