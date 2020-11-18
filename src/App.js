import './App.scss';
import { ReactComponent as Logo } from "./assets/logos/Trendy_Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faFlickr, faTwitter, faVk, faLinkedinIn, faPinterest, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faImage } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faRss, faSearch, faQuoteRight, faVolumeUp, faPlay, faMusic } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  return (
    <div className="app">
      <div className="navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top header ">
        <Logo />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav ml-auto navigation">
            <li class="nav-item">
              <a class="nav-link" href="#s">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">WORKS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">PRICING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">CLIENTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">BLOG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">CONTACT</a>
            </li>

          </ul>

        </div>

      </div>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center page-title">
        <h1>OUR BLOG</h1>
        <p>Duis vitae velit mollis, congue nisi dignissim, pellentesque lorem</p>
      </div>
      <main className="container-fluid main">
        <div className="row d-flex justify-content-center justify-content-lg-between">
          <div className="col-8  order-lg-1 order-2  content" >
            <div className="post">
              <img src={"https://cdn.lynda.com/course/372539/372539-637286171969670148-16x9.jpg"} className="img-fluid post-img" alt="Responsive" />
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <p className="post-title">Standart Blog Post With Featured Image</p>
                  <div className="info">
                    <span className="author">Mike</span><span className="thema">Web Design</span><span className="comments">0 comments</span>
                  </div>
                  <p className="text">Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque. Phasellus blandit arcu id ante feugiat</p>
                  <button type="button" className="btn btn-primary read-more">read more</button>
                </div>
              </div>
            </div>
            <div className="post">
              <div id="carouselExampleIndicators" className="carousel slide slider" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div className="carousel-item active">
                    <img src={"https://cdn.lynda.com/course/372539/372539-637286171969670148-16x9.jpg"} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={"https://cdn.lynda.com/course/372539/372539-637286171969670148-16x9.jpg"} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={"https://cdn.lynda.com/course/372539/372539-637286171969670148-16x9.jpg"} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faImage} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <p className="post-title">Blog Post With Image Gallery</p>
                  <div className="info">
                    <span className="author">Mike</span><span className="thema">Web Design</span><span className="comments">0 comments</span>
                  </div>
                  <p className="text">Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque. Phasellus blandit arcu id ante feugiat</p>
                  <button type="button" className="btn btn-primary read-more">read more</button>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="audio">
                <FontAwesomeIcon icon={faPlay} className="play" />
                <span className="timer">01:15</span>
                <div className="audio-progress">
                  <div className="progress-line"></div>
                </div>
                <span className="duration">03:15</span>
                <FontAwesomeIcon icon={faVolumeUp} className="volume" />
                <div className="volume-bar">
                  <div className="volume-line"></div>
                </div>
              </div>
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faMusic} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <p className="post-title">Music Post</p>
                  <div className="info">
                    <span className="author">Mike</span><span className="thema">Web Design</span><span className="comments">0 comments</span>
                  </div>
                  <p className="text">Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque. Phasellus blandit arcu id ante feugiat</p>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="video">

              </div>
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <p className="post-title">Standart Blog Post With Featured Image</p>
                  <div className="info">
                    <span className="author">Mike</span><span className="thema">Web Design</span><span className="comments">0 comments</span>
                  </div>
                  <p className="text">Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque. Phasellus blandit arcu id ante feugiat</p>
                  <button type="button" className="btn btn-primary read-more">read more</button>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <div className="quote-block">
                    <div className="quote-container">
                      <p className="quote-text">Some great quote that you love and want to share as a single post.</p>
                      <p className="quote-author">Quote Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="post-table">
                <div className="post-icon">
                  <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  <span>31</span>
                  <span className="month">mar</span>
                </div>
                <div className="post-description">
                  <p className="post-title">Standart Blog Post With No Featured Image</p>
                  <div className="info">
                    <span className="author">Mike</span><span className="thema">Web Design</span><span className="comments">0 comments</span>
                  </div>
                  <p className="text">Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque. Phasellus blandit arcu id ante feugiat</p>
                  <button type="button" className="btn btn-primary read-more">read more</button>
                </div>
              </div>
            </div>

          </div>
          <div className="col-3 order-1 order-lg-2 dashboard" >
            <div className="searcher container">
              <input type="search" className="search" placeholder="SEARCH..." />
              <FontAwesomeIcon icon={faSearch} className="loupe-icon" />
            </div>

            <div className="categories container  d-none  d-lg-block">
              <p className="title">CATEGORIES</p>
              <ul className="list">
                <li>web design</li>
                <li>graphic design</li>
                <li>photography</li>
                <li>developing</li>
                <li>consulting</li>
              </ul>
            </div>

            <div className="popular-posts container  d-none  d-lg-block">
              <p className="title">POPULAR POSTS</p>
              <div className="post">
                <p className="name">The Most Readed Blog Post Here</p>
                <div className="info">
                  <span className="views">280</span><span className="author">Mike</span>
                </div>
              </div>
              <div className="post">
                <p className="name">Second Most Popular Post</p>
                <div className="info">
                  <span className="views">120</span><span className="author">Elly</span>
                </div>
              </div>
              <div className="post">
                <p className="name">The Third Hot Post</p>
                <div className="info">
                  <span className="views">10222</span><span className="author">Jonh</span>
                </div>
              </div>
            </div>

            <div className="flickr-images container  d-none  d-lg-block">
              <p className="title">flickr images</p>
              <div className="container">
                <div className="row  d-flex justify-content-between images">
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                </div></div>
            </div>

            <div className="text-widget container  d-none  d-lg-block">
              <p className="title">text widget</p>
              <div className="container textbox">
                <p>Donec quis vestibulum nisl, a bibendum velit. Proin cursus mauris non malesuada euismod. In vitae accumsan neque.</p>
              </div>
            </div>

            <div className="tags container d-none d-lg-block">
              <p className="title">popular tags</p>
              <div className="tags-wrapper">
                <div>Design</div>
                <div>Art</div>
                <div>CSS</div>
                <div>Wordpress</div>
                <div>Photography</div>
                <div>Developing</div>
                <div>Barnding</div>
                <div>HTML</div>
              </div>
            </div>

            <div className="subscribe container d-none d-lg-block ">
              <p className="title">subscribe for newsletter</p>
              <div className="form">
                <p>Donec quis vestibulum nisl, a bibendum velit.</p>
                <input type="text" className="email-input" placeholder="your email address"></input>
                <button type="button" className="btn btn-primary submit">SUBSCRIBE</button>
              </div>
            </div>

            <div className="datepicker container d-none d-lg-block">
              <p className="title">Posts by date</p>
              <div className="calendar">
                <p className="month">november 2020</p>
                <div className="arrows">
                  <div className="prev"></div><div className="next"></div>
                </div>
                <div class="date">
                  <div class="day">M</div>
                  <div class="day">T</div>
                  <div class="day">W</div>
                  <div class="day">T</div>
                  <div class="day">F</div>
                  <div class="day">S</div>
                  <div class="day">S</div>
                  <div class="number number--current"></div>
                  <div class="number"></div>
                  <div class="number number--current"></div>
                  <div class="number">1</div>
                  <div class="number number--current">2</div>
                  <div class="number">3</div>
                  <div class="number">4</div>
                  <div class="number">5</div>
                  <div class="number number--current">6</div>
                  <div class="number">7</div>
                  <div class="number">8</div>
                  <div class="number">9</div>
                  <div class="number">10</div>
                  <div class="number">11</div>
                  <div class="number number--current">12</div>
                  <div class="number">13</div>
                  <div class="number">14</div>
                  <div class="number">15</div>
                  <div class="number">16</div>
                  <div class="number">17</div>
                  <div class="number number--current">18</div>
                  <div class="number">19</div>
                  <div class="number">20</div>
                  <div class="number number--current">21</div>
                  <div class="number">22</div>
                  <div class="number">23</div>
                  <div class="number number--current">24</div>
                  <div class="number number--current">25</div>
                  <div class="number">26</div>
                  <div class="number">27</div>
                  <div class="number">28</div>
                  <div class="number number--current">29</div>
                  <div class="number">30</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container-fluid d-flex flex-column align-items-center justify-content-center paginator-block">
          <div className="paginator">
            <div className="prev"></div>
            <div className="counter">
              <p>1 of 95</p>
            </div>
            <div className="next"></div>
          </div>
        </div>
      </main>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center find-us">
        <h1>FIND US</h1>
        <p>Duis vitae velit mollis, congue nisi dignissim, pellentesque lorem</p>
        <div className="contacts d-flex flex-column justify-content-around align-items-center flex-md-row justify-content-md-between align-items-md-start" >
          <div className="wrapper" ><FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <div className="description">
              <span className="desc-title">PHONES</span>
              <span className="text">+359 2 88 55 999<br />+359 89 88 55 999 </span>
            </div>
          </div>
          <div className="wrapper" ><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <div className="description">
              <span className="desc-title">OFFICE ADDRESS</span>
              <span className="text">4 Byala Cherkva Str.<br />3rd Floor<br />Sofia, 1000,<br />Bulgaria</span>
            </div></div>
          <div className="wrapper" ><FontAwesomeIcon className="icon" icon={faEnvelope} />
            <div className="description">
              <span className="desc-title">EMAILS</span>
              <span className="text">office@trendy.com<br />sales@trendy.com</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid d-flex flex-column-reverse flex-lg-row justify-content-around align-items-center  footer">
        <span>Copyright © 2014 Trendy - Designed by Stefan Parnarov</span>
        <div className="social-media-icons">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faGooglePlusG} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faVk} />
          <FontAwesomeIcon icon={faDribbble} />
          <FontAwesomeIcon icon={faFlickr} />
          <FontAwesomeIcon icon={faRss} />
        </div>
      </footer>
    </div >
  );
}

export default App;
