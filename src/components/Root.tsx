import { classnames, padding } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(padding('pb-10', 'py-4', 'px-8'))
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
