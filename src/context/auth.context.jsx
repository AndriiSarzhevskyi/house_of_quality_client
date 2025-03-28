import { createContext } from 'react'

function noop() { }

export const AuthContext = createContext({
  token: null,
  userName: null,
  userId: null,
  login: noop,
  logout: noop,
  changeName: noop,
  isAuthenticated: false,
  status: null
})