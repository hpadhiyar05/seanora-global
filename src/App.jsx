import AppRouter from './routes/Router';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { LazyMotion, domAnimation } from 'framer-motion';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </LazyMotion>
  );
}

export default App;
