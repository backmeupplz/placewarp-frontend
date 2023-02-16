import Navbar from 'components/Navbar'
import classnames, { display, flexDirection, space } from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-2')
)
export default function () {
  return (
    <div className={container}>
      <Navbar />
    </div>
  )
}
