import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faBehanceSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './FooterStyles.css';
const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Tripmania</h1>
                    <p>choose your favourite destination</p>

                </div>
                <div>
                <a href="/">
            <FontAwesomeIcon icon={faFacebookSquare} 
                 onClick={() => window.open('https://www.facebook.com')}/>
          </a>
          <a href="/">
            <FontAwesomeIcon 
            icon={faInstagramSquare}
            onClick={() => window.open('https://www.instagram.com')}
             />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faBehanceSquare} 
            onClick={() => window.open('https://www.behance.net')}/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faTwitterSquare} 
            onClick={() => window.open('https://www.twitter.com')}/>
          </a>
                </div>

            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;