import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../styles/style.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
}, []);
  return <Component {...pageProps} />
}

export default MyApp
