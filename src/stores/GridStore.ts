import { proxy } from 'valtio'

class GridStore {
  grid = []
}

export default proxy(new GridStore())
