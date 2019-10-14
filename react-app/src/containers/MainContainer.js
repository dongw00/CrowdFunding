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
                <h2>Investment products</h2>
              </header>
              <div className="row">
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66766943-45a96c80-eeea-11e9-9e52-390210799b97.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>추격매매 하이리스크, 하이리턴</p>
                    <a href="#" className="button">상품 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66765611-3ffe5780-eee7-11e9-8907-4f4627a5bd96.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>전고점 돌파 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">상품 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66766888-2ad6f800-eeea-11e9-81fd-30900d9ef58f.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>csi,rsi 기반 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">상품 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66765611-3ffe5780-eee7-11e9-8907-4f4627a5bd96.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>csi,rsi 기반 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">상품 보러가기</a>
                  </section>
                </div>
              </div>

              <header>
                <h2>Started Product</h2>
              </header>
              <div className="row">
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66766943-45a96c80-eeea-11e9-9e52-390210799b97.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>추격매매 하이리스크, 하이리턴</p>
                    <a href="#" className="button">수익률 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66765611-3ffe5780-eee7-11e9-8907-4f4627a5bd96.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>전고점 돌파 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">수익률 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66766888-2ad6f800-eeea-11e9-81fd-30900d9ef58f.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>csi,rsi 기반 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">수익률 보러가기</a>
                  </section>
                </div>
                <div className="3u">
                  <section>
                    <a href="#" className="image full"><img
                        src="https://user-images.githubusercontent.com/26537104/66765611-3ffe5780-eee7-11e9-8907-4f4627a5bd96.png"
                        width={'30px'} height={'30px'} alt=""/></a>
                    <p>csi,rsi 기반 매매 로우리스크, 하이리턴</p>
                    <a href="#" className="button">수익률 보러가기</a>
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
