import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import useAnimation from '../hooks/useAnimation'

const DancingCat = () => {
  const { isPlaying, animationType, toggleAnimation, changeAnimationType } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className="cat-wrapper">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`cat ${isPlaying ? animationType : ''}`}
        />
      </div>

      <div className="controls">
        <button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={toggleAnimation}
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        >
          {isPlaying ? '⏸️ 정지' : '▶️ 춤추기'}
        </button>

        <div className="animation-controls">
          <h3>춤 스타일 선택:</h3>
          <div className="button-group">
            <button
              className={`style-button ${animationType === 'dance' ? 'active' : ''}`}
              onClick={() => changeAnimationType('dance')}
              aria-label="기본 춤 애니메이션 선택"
            >
              💃 기본 춤 (1)
            </button>
            <button
              className={`style-button ${animationType === 'bounce' ? 'active' : ''}`}
              onClick={() => changeAnimationType('bounce')}
              aria-label="통통 뛰기 애니메이션 선택"
            >
              🦘 통통 뛰기 (2)
            </button>
            <button
              className={`style-button ${animationType === 'spin' ? 'active' : ''}`}
              onClick={() => changeAnimationType('spin')}
              aria-label="빙글빙글 애니메이션 선택"
            >
              🌀 빙글빙글 (3)
            </button>
            <button
              className={`style-button ${animationType === 'shake' ? 'active' : ''}`}
              onClick={() => changeAnimationType('shake')}
              aria-label="흔들흔들 애니메이션 선택"
            >
              📳 흔들흔들 (4)
            </button>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <p>🎵 고양이가 즐겁게 춤을 추고 있어요! 🎵</p>
        <p>다양한 춤 스타일을 선택해보세요!</p>
        <p className="accessibility-info">
          💡 키보드 사용법: 스페이스바로 재생/정지, 숫자키 1-4로 춤 변경
        </p>
      </div>
    </div>
  )
}

export default DancingCat