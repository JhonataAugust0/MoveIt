/** Imports
 * Importação dos elementos do NextJs que serão usados  
 * na aplicação.
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

/** export default class MyDocument extends Document
 *  A classe tem o objetivo de renderizar as fontes uti- 
 * lizadas em toda a aplicação, construindo a head e o 
 * body do HTML usando os componentes do NextJs em
 * typescript, além de implantar os scripts do NextJs
 * na aplicação, o que melhora sua performance, uma vez
 * que ele é o responsável por pré-renderizar as páginas
 * da aplicação, reutilizando o html a cada solicitação 
 * feita pelo client, o que torna a aplicação mais ágil.
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
