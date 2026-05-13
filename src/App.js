import RoutesApp from './routes';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
     <ToastContainer autoClose={3000} position="top-center" theme="dark" />
     <RoutesApp />
    </div>
  );
}

export default App;
