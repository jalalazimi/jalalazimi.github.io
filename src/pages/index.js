import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {observer, inject} from 'mobx-react';

import Header from '../components/Header';
import Bio from '../components/Bio';
import Posts from '../components/Posts';

@inject('store')
@observer
class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.store.site.siteMetadata.title');
        const articles = get(this, 'props.store.articles');
        const {transition} = this.props;

        return (
            <div style={transition && transition.style}>
                <Helmet title={get(this, 'props.store.site.siteMetadata.title')}/>
                <Header cover={this.props.data.hero}>
                    <div className="title">
                        <h1>
                            Hello, I’m Jalal &mdash; a{' '}
                            <em>product designer and developer</em> based in Tehran, Iran.
                        </h1>
                    </div>
                    <div className="summary">
                        <p>
                            I'm an Iranian software developer ,user interface designer and user experience designer. I'm
                            a minutiae-obsessed passionate Interactive Developer and Designer with both love for the
                            look of the site as the brilliance happening behind the scenes with over 10 years of UI/UX
                            design and development experience under my belt. My main focus lies with the client side of
                            the web but still maintain a good understanding of server side code. I fall in love with
                            ideas, I'm a person who thrives on learning more and thinking smarter.
                        </p>
                        <p>
                            I work at ADP company and I've had the honor to work with some of the most creative, young and
                            talented people in the country over the years. I love Digital art, javascript and React. And
                            I enjoy spending time with my family
                        </p>
                    </div>
                </Header>
                {/*<Posts posts={articles}/>*/}
            </div>
        );
    }
}

BlogIndex.propTypes = {
    route: PropTypes.object,
};

export default BlogIndex;

export const query = graphql`
  query GatsbyImageHeroIndexQuery {
    hero: file(relativePath: { eq: "hero-bw.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
