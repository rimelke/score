import GlobalStyle from '../styles/global'
import { Provider as ReduxProvider } from 'react-redux'
import {store, persistor} from '../store'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <GlobalStyle />
                <Component {...pageProps} />
            </PersistGate>
        </ReduxProvider>
    )
}

export default MyApp