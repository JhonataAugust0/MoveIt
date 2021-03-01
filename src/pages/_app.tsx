/** Imports
 *  Importação do componente ChallengesProviderm oriundo
 *  de ChallengesContext, visto que é o componente que
 *  engloba toda a aplicação.  
 */
import '../styles/global.css';

/** Function MyApp
 *  A MyApp recebe os parâmetros Component e pageProps,
 * que são passados pelo context de Challenges, for-
 * mando a aplicação através dos componentes.  
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
