import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APP_API_KEY,
  apiKey: 'AIzaSyARqnJdaC267s4Gkt9y-WS98ySfM-sP4OI',
  authDomain: 'hoolank-94ddc.firebaseapp.com',
  projectId: 'hoolank-94ddc',
  storageBucket: 'hoolank-94ddc.appspot.com',
  messagingSenderId: '116103451471',
  appId: '1:116103451471:web:11a3618d8376c1f7dbeb3a',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
