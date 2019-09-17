import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Ciao, sono Giulia</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>CIAO, SONO…</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Ciao, sono Giulia ho 20 anni e studio Scienze Naturali ed Ambientali all’università
                di Pisa.
              </p>

              <p>
                Appassionata fin da piccola al mondo scientifico, quando il mio papà mi spiegava il
                sistema solare con le palline rimbalzine e mi raccontava la Scimmia Nuda di Desmond
                Morris, sono sempre rimasta incantata davanti a Super Quark con Piero ed Alberto
                Angela, sognando di poter un giorno essere proprio come loro!
              </p>

              <p>
                Crescendo, poi ho intrapreso un percorso di studi sperimentale al Liceo Scientifico
                di Lucca incontrando insegnati che sono riusciti a far esplodere il mio amore per
                tutto il mondo scientifico, gli approcci ad esso, la divulgazione. Ma non solo… Nel
                mio percorso sono potuta entrare in contatto anche con la solidarietà, il
                volontariato, la filosofia. Questi modi mi hanno ispirata ciascuno in modo diverso e
                proprio.
              </p>

              <p>
                Sono un’appassionata lettrice di National Geographic perché riesce sempre a
                trasmettere con parole ed immagini concetti e sentimenti.
              </p>

              <p>
                E siccome non si può vivere di solo studio, confesso di essere un po’ schiava di
                alcune serie tv: come Sherlock, Elementary, BBT, Modern Family e Cosmos: odissea
                nello spazio (con l’insostituibile Neil deGrasse Tyson).
              </p>

              <p>
                Amo le piante di ogni genere e dei giardini botanici! Da maestosi alberi secolari, a
                piantine annuali, dai Bonsai alle piante carnivore, dalle piante grasse al muschio!
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
