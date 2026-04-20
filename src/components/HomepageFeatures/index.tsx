import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Monstros Catalogados',
    Svg: require('@site/static/img/icons/sword.svg').default,
    description: (
      <>
        Problemas técnicos documentados com suas soluções. Cada "monstro" 
        derrotado vira conhecimento compartilhado.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Diário de Batalhas',
    Svg: require('@site/static/img/icons/notebook.svg').default,
    description: (
      <>
        Posts sobre experiências recentes, desafios enfrentados e lições 
        aprendidas no dia a dia do desenvolvimento.
      </>
    ),
    link: '/blog',
  },
  {
    title: 'Arsenal de Ferramentas',
    Svg: require('@site/static/img/icons/backpack.svg').default,
    description: (
      <>
        Ferramentas úteis de desenvolvimento e organização que uso no meu 
        fluxo de trabalho.
      </>
    ),
    link: '/blog/tags',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center circle-container">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
