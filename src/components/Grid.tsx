import { useEffect, useRef } from 'preact/hooks'
import classnames, {
  borderColor,
  borderWidth,
  display,
  flexDirection,
} from 'classnames/tailwind'

function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  borderColor('border-gray-200'),
  borderWidth('border')
)
export default function () {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (canvas && context) {
      for (let x = 0; x < 600; x++) {
        for (let y = 0; y < 600; y++) {
          context.fillStyle = randomHexColor()
          context.fillRect(x, y, 1, 1)
        }
      }
    }
  }, [canvasRef])

  return (
    <span className={container}>
      <canvas id="pixel-grid" width={600} height={600} ref={canvasRef}></canvas>
    </span>
  )
}
