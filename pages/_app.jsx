import Header from '../components/Layout/Header';
import localFont from 'next/font/local'
import '../styles/globals.css';

const raleway = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
