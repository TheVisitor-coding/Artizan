import { createContext, useContext, useEffect, useReducer } from 'react'
import { loginApi, registerApi } from '../services/api'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN', // Connecté avec Succès
  REGISTER: 'REGISTER', // Inscris et Connecté avec succès
  LOGOUT: 'LOGOUT', // Déconnecté
  LOADING: 'LOADING', // Chargement
  ERROR: 'ERROR', // Erreur
  RESET: 'RESET' // Réinitialisation de l'état
}

const initialState = {
  jwt: null,
  user: null,
  loading: false,
  isLoggedIn: false,
  error: null
}

/**
 * @param prevState -> Etat précédent l'action
 * @param {type, data?{jwt, user, error}} action -> Action pour mettre à jour l'état
 */
const authReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
    case actionTypes.LOGIN:
      return {
        jwt: action.data.jwt,
        user: action.data.user,
        loading: false,
        isLoggedIn: true,
        error: null
      }
    case actionTypes.ERROR:
      return {
        ...initialState,
        error: action.data.error
      }
    case actionTypes.LOADING:
      return {
        ...prevState, // Recopie l'état précédent
        loading: true
      }
    case actionTypes.LOGOUT:
    case actionTypes.RESET:
      return {
        initialState
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (dispatch) => ({
  // credentials = { identifier, password }
  login: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await loginApi(credentials)
      dispatch({
        type: actionTypes.LOGIN,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      toast.error('Identifiant ou Mot de Passe incorrect')
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Identifiant ou Mot de Passe incorrect' }
      })
    }
  },
  logout: () => {
    dispatch({ type: actionTypes.LOGOUT })
  },
  register: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await registerApi(credentials)
      dispatch({
        type: actionTypes.REGISTER,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      toast.error('Erreur lors de l\'inscription')
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Erreur lors de l\'inscription' }
      })
    }
  }
})

const AuthProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('AUTH')
  const _initialState = savedState ? JSON.parse(savedState) : initialState
  const [state, dispatch] = useReducer(authReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an <AuthProvider>')
  return context
}

export {
  AuthProvider,
  useAuth
}
