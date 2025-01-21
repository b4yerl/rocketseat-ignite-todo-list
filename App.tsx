import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import { AppProvider } from './AppContext';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="light" translucent />
      <Home />
    </AppProvider>
  );
}
