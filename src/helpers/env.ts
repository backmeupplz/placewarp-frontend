import { cleanEnv } from 'envalid'

export default cleanEnv(import.meta.env, {
  // VITE_ETH_RPC: str(),
  // VITE_CONTRACT: str(),
})
