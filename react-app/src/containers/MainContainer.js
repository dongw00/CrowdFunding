import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Layout} from '../components'

class MainContainer extends Component {
  render() {
    return (
        <Layout>
          <div id="main">
            <div className="container">
              <header>
                <h2>Gravida nibh quis urna</h2>
              </header>
              <div className="row">
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img src="../images/pics01.jpg" alt=""/></a>
                    <p>Quisque dictum. Pellentesque viverra enim. Integer nisl risus, sagittis convallis, rutrum id,
                      elementum.</p>
                    <a href="#" className="button">Read More</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img src="../images/pics11.jpg" alt=""/></a>
                    <p>Pellentesque viverra enim. Tristique ante ut risus. Quisque dictum. Integer sagittis convallis
                      elementum.</p>
                    <a href="#" className="button">Read More</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img src="../images/pics12.jpg" alt=""/></a>
                    <p>Pellentesque viverra enim. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id,
                      elementum.</p>
                    <a href="#" className="button">Read More</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img src="../images/pics13.jpg" alt=""/></a>
                    <p>Tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis elementum.</p>
                    <a href="#" className="button">Read More</a>
                  </section>
                </div>
              </div>
              <div className="divider">&nbsp;</div>
              <div className="row">

                <div className="8u skel-cell-important">
                  <section id="content">
                    <header>
                      <h2>Integer gravida nibh quis urna</h2>
                      <span className="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum</span>
                    </header>
                    <p><a href="#" className="image full"><img src="../images/pics02.jpg" alt=""/></a></p>
                    <p>This is <strong>Monochromed</strong>, a responsive HTML5 site template freebie by <a
                        href="http://templated.co">TEMPLATED</a>. Released for free under the <a
                        href="http://templated.co/license">Creative Commons Attribution</a> license, so use it for
                      whatever
                      (personal or commercial) &ndash; just give us credit! Check out more of our stuff at <a
                          href="http://templated.co">our site</a> or follow us on <a
                          href="http://twitter.com/templatedco">Twitter</a>.</p>
                    <a href="#" className="button">Read More</a>
                  </section>
                </div>

                <div id="sidebar" className="4u">
                  <section>
                    <header>
                      <h2>Gravida praesent</h2>
                      <span className="byline">Praesent lacus congue rutrum</span>
                    </header>
                    <p>Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum. Maecenas
                      luctus
                      lectus at sapien. Consectetuer adipiscing elit.</p>
                    <ul className="default">
                      <li><a href="#">Pellentesque quis lectus gravida blandit.</a></li>
                      <li><a href="#">Lorem ipsum consectetuer adipiscing elit.</a></li>
                      <li><a href="#">Phasellus nec nibh pellentesque congue.</a></li>
                      <li><a href="#">Cras aliquam risus pellentesque pharetra.</a></li>
                      <li><a href="#">Duis non metus commodo euismod lobortis.</a></li>
                      <li><a href="#">Lorem ipsum dolor adipiscing elit.</a></li>
                    </ul>
                  </section>
                </div>

              </div>

            </div>
          </div>
        </Layout>
    )
  }
}

export default MainContainer
