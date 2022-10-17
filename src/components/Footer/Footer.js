import { Link } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import SiteLogo from '../../Images/site-logo.png'
import Email from '../../Images/email.svg'
import Phone from '../../Images/phone.svg'
import GitHub from '../../Images/gitHub.svg'
import Ellips from '../../Images/ellips.svg'
import Facebook from '../../Images/facebook.svg'
import Instagram from '../../Images/instagram.svg'
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-contact">
            <div className='site-logo'>
              <img className="site-logoImg" alt="logo" width={42} height={37} src={Logo} />
              <img className="site-logoImg" alt="site-logo" width={119} height={13} src={SiteLogo} />
            </div>

            <ul className="contact-list">
              <li className="contact-item">
                <Link className='contact-link' to=''>Living Ecosystem</Link>
              </li>

              <li className="contact-item">
                <Link className='contact-link' to=''>Decentralized Token</Link>
              </li>

              <li className="contact-item">
                <Link className='contact-link' to=''>
                  <img className="contact-icon" alt="email" width={24} height={24} src={Email} />
                  <span className='contact-number'>imperiya380@gmail.com</span>
                </Link>
              </li>

              <li className="contact-item">
                <Link className='contact-link' to=''>
                  <img className="contact-icon" alt="email" width={24} height={24} src={Phone} />
                  <span className='contact-number'>+99 893 047 06 78</span>
                </Link>
              </li>

              <li className="contact-item">
                <Link className='contact-link' to=''>
                  <img className="contact-icon" alt="email" width={24} height={24} src={Phone} />
                  <span className='contact-number'>+99 894 681 86 91</span>
                </Link>
              </li>

              <li className="contact-item">
                <Link className='contact-link' to=''>
                  <img className="contact-icon" alt="email" width={24} height={24} src={Phone} />
                  <span className='contact-number'>+99 833 890 22 01</span>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="footer-pages">
            <li className="pages-item">
              <Link className='pages-link pages-linkHeader' to=''>Pages</Link>
            </li>

            <li className="pages-item">
              <Link className='pages-link' to=''>Network Statistic</Link>
            </li>

            <li className="pages-item">
              <Link className='pages-link' to=''>What is IRA Coin</Link>
            </li>

            <li className="pages-item">
              <Link className='pages-link' to=''>Wallets</Link>
            </li>

            <li className="pages-item">
              <Link className='pages-link' to=''>Quick Start Guide</Link>
            </li>
          </ul>

          <ul className="footer-learn">
            <li className="learn-item">
              <Link className='learn-link learn-linkHeader' to=''>Learn</Link>
            </li>

            <li className="learn-item">
              <Link className='learn-link' to=''>Blog</Link>
            </li>

            <li className="learn-item">
              <Link className='learn-link' to=''>Video</Link>
            </li>

            <li className="learn-item">
              <Link className='learn-link' to=''>Podcast</Link>
            </li>

            <li className="learn-item">
              <Link className='learn-link' to=''>Network states</Link>
            </li>
          </ul>

          <ul className="footer-support">
            <li className="support-item">
              <Link className='support-link support-linkHeader' to=''>Support</Link>
            </li>

            <li className="support-item">
              <Link className='support-link' to=''>Custommer Service</Link>
            </li>

            <li className="support-item">
              <Link className='support-link' to=''>FAQ</Link>
            </li>

            <li className="support-item">
              <Link className='support-link' to=''>Community</Link>
            </li>
          </ul>

          <ul className="footer-about">
            <li className="about-item">
              <Link className='about-link about-linkHeader' to=''>About IRA</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>About us</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>Privacy policy</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>Term of use</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>Quick start guide</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>Language support</Link>
            </li>

            <li className="about-item">
              <Link className='about-link' to=''>Cookie policy</Link>
            </li>
          </ul>
        </div>

        <hr className='footer-hr'/>

        <div className='footer-networks'>
          <p className="footer-reserved">©2022 IRA.COIN. All right reserved</p>
          <div className="networks">
            <Link className='networks-link'>
              <img className="networks-img" alt="GitHub" width={40} height={40} src={GitHub} />
            </Link>
            
            <Link className='networks-link'>
              <img className="networks-img" alt="ellips" width={40} height={40} src={Ellips} />
            </Link>

            <Link className='networks-link'>
              <img className="networks-img" alt="Facebook" width={40} height={40} src={Facebook} />
            </Link>

            <Link className='networks-link'>
              <img className="networks-img" alt="Instagram" width={40} height={40} src={Instagram} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}