import Mask from '../../Images/mask.svg'
import Safe from '../../Images/safe.svg'
import Wallet from '../../Images/wallet.svg'
import Mobile from '../../Images/mobile.svg'
import TVset from '../../Images/tv-set.svg'
import Globe from '../../Images/globe.svg'
import Icon from '../../Images/icon.svg'
import MobileBlack from '../../Images/mobileBlack.svg'
import TVsetBlack from '../../Images/tv-setBlack.svg'
import GlobeBlack from '../../Images/globeBlack.svg'
import { Link } from 'react-router-dom'
import './wallets.css'

export const Wallets = () => {
  return (
    <div className="wallets">
      <div className="container">
        <div className="wallets-inner">
          <h2 className="wallets-heading">Choose Your Wallets</h2>

          <ul className="wallets-list">
            <li className="wallets-item">
              <div className="wallets-itemHeader">
                <img className="wallets-itemLogo" alt="iraWhat-videoImg" width={48} height={48} src={Wallet} />
                <h3 className="wallets-itemHeading">IRA Wallet</h3>
              </div>

              <p className="wallets-itemText">Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide</p>

              <div className="wallets-LinkDiv">
                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="mobile" width={24} height={24} src={Mobile} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="TV set" width={24} height={24} src={TVset} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="globe" width={24} height={24} src={Globe} />
                </Link>
              </div>

              <Link className="wallets-link" to=''> Choose Wallet
                <img className="wallets-linkIcon" alt="icon" width={20} height={0} src={Icon} />
              </Link>
            </li>

            <li className="wallets-item wallets-itemBlack">
              <div className="wallets-itemHeader wallets-itemHeaderBlack">
                <img className="wallets-itemLogo" alt="iraWhat-videoImg" width={48} height={48} src={Safe} />
                <h3 className="wallets-itemHeading wallets-itemHeadingBlack">IRA Safe</h3>
              </div>

              <p className="wallets-itemText wallets-itemTextBlack">IRA Safe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies.</p>

              <div className="wallets-LinkDiv wallets-LinkDivBlack">
                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg wallets-itemImgBlack" alt="mobile" width={24} height={24} src={MobileBlack} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg wallets-itemImgBlack" alt="TV set" width={24} height={24} src={TVsetBlack} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg wallets-itemImgBlack" alt="globe" width={24} height={24} src={GlobeBlack} />
                </Link>
              </div>

              <Link className="wallets-link wallets-linkBlack" to=''> Choose Wallet
                <img className="wallets-linkIcon wallets-linkIconBlack" alt="icon" width={20} height={0} src={Icon} />
              </Link>
            </li>

            <li className="wallets-item">
              <div className="wallets-itemHeader">
                <img className="wallets-itemLogo" alt="iraWhat-videoImg" width={48} height={48} src={Mask} />
                <h3 className="wallets-itemHeading">IRA Mask</h3>
              </div>

              <p className="wallets-itemText">IRA Mask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.</p>

              <div className="wallets-LinkDiv">
                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="mobile" width={24} height={24} src={Mobile} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="TV set" width={24} height={24} src={TVset} />
                </Link>

                <Link className="wallets-itemLink" to=''> 
                  <img className="wallets-itemImg" alt="globe" width={24} height={24} src={Globe} />
                </Link>
              </div>

              <Link className="wallets-link" to=''> Choose Wallet
                <img className="wallets-linkIcon" alt="icon" width={20} height={0} src={Icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}