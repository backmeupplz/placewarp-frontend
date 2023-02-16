import { ConnectButton } from '@rainbow-me/rainbowkit'
import { TitleText } from 'components/Text'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center')
)
export default function () {
  return (
    <div className={container}>
      <TitleText>PlaceWarp</TitleText>
      <ConnectButton accountStatus="address" />
    </div>
  )
}
