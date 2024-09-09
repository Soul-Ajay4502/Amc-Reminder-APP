// App.js

import * as React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Routes from './src/routes/Routes';


const App = () => {
    React.useEffect(() => {
    }, []);


    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Routes />
        </SafeAreaProvider>
    );
};

export default App;
