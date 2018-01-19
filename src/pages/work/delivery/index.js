import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Article from '~/src/components/Article';

import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';


export const data = {
  id: 'delivery',
  isWork: true,
  subtitle: 'Delivery',
  title: 'Share your design work,<br/>clutter-free.',
  date: '2017-04-01',
  path: '/work/delivery',
  external: 'https://use.delivery',
  details: [
    {
      title: 'Responsibility',
      description: 'Design & Development',
    },
    {
      title: 'Date',
      description: 'Q2 2017',
    },
    {
      title: 'Technology',
      description: 'React, Next.js, Node.js',
    },
  ],
};

export default props => (
  <Article path={data.path} {...props}>
    <Block mobilePull>
      <p>
        Around Easter 2017 I decided to work on a simple webapp called{' '}
        <a href="//use.delivery">Delivery</a> to help designers share their work
        in progress.
      </p>
    </Block>
    <Block align="right">
      <p>
        I wanted to create a hassle–free solution, which is reduced to the bare
        minimum of features and requires neither sign-up nor a credit card.
      </p>
    </Block>
    <hr />
    <Block align="center" pull>
      <h2>Features</h2>
      <p>
        Type in your company/client, upload and describe your screens, then
        share with colleagues.&nbsp;Simple.
      </p>
    </Block>
    <Block>
      <h3>Goals</h3>
      <p>
        I created Delivery mainly to sharpen my React & MobX skills. Building a
        simple, yet full webapp from the first line of code to deployment in a
        matter of roughly 3 days was a great experience.
      </p>
      <p>
        I drew inspiration from makers like{' '}
        <a href="//twitter.com/levelsio">Pieter Levels</a> and their no-nonsense
        approach to launching new products & experiments early and often.
      </p>
    </Block>

    <Block align="right">
      <h3>Technology</h3>
      <p>
        The project is built on top of my{' '}
        <a href="//github.com/fabe/www">personal boilerplate</a>, featuring
        React, MobX, Next.js and MongoDB. I am hosting the images on{' '}
        <span className="caps">AWS</span>, and run the backend on a{' '}
        <a href="//linode.com">Linode</a> server.
      </p>
      <p>
        The full source code is{' '}
        <a href="//github.com/fabe/delivery">available on GitHub</a>.
      </p>
    </Block>
  </Article>
);
