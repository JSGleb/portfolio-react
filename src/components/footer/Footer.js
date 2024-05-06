import "./style.css";

import vk from './../../img/icons/vk.svg'
import instagram from './../../img/icons/instagram.svg'
import twitter from './../../img/icons/twitter.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import gitHub from './../../img/icons/gitHub.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li>
                            <a href="#!">
                                <img src={vk} />
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src={instagram} />
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src={twitter} />
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src={linkedIn} />
                            </a>
                        </li>

                        <li>
                            <a href="#!">
                                <img src={gitHub} />
                            </a>
                        </li>
                    </ul>

                    <div className="copyright">
                        <p>&copy; frontend developer Gleb, 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;