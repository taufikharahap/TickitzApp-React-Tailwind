import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import store from './store'
import router from './router'
import './index.css'

const persist = persistStore(store)

// npm install redux react-redux redux-persist @reduxjs/toolkit

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
  </React.StrictMode>
)
