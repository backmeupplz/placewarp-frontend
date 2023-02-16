import {
  backgroundClip,
  backgroundImage,
  classnames,
  fontSize,
  fontWeight,
  gradientColorStops,
  letterSpacing,
  textAlign,
  textColor,
  textTransform,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const titleText = classnames(
  fontSize('text-xl', 'md:text-4xl'),
  fontWeight('font-extrabold'),
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-slate-900', 'via-purple-900', 'to-slate-900'),
  textTransform('uppercase'),
  letterSpacing('tracking-tighter')
)

export function TitleText({ children }: ChildrenProp) {
  return <h1 className={titleText}>{children}</h1>
}

const bodyText = classnames(textAlign('text-center'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
