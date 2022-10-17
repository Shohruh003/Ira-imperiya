import { Link } from "react-router-dom"
import Icon from '../../Images/iraWhat-icon.png'
import IraWhatImg from '../../Images/iraWhat-img.png'
import IraWhatVideoImg from '../../Images/iraWhat-videoImg.png'
import './iraWhat.css'

export const IraWhat = () => {
  return (
    <div className="iraWhat">
      <div className="container">
        <div className="iraWhat-inner">
          <h2 className="iraWhat-heading">What Is IRA (Imperiya)?</h2>
          <div className="iraWhat-content">
            <h3 className="iraWhat-contHead">The fastest growing and community friendly</h3>

            <div className="iraWhat-about">
              <p className="iraWhat-aboutText">Imperiya tocen is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.</p>
              <Link className="iraWhat-aboutLink" to=''>Explore Ecosystem  
                <img className="iraWhat-aboutIcon" alt="icon" width={20} height={0} src={Icon} />
              </Link>
            </div>
          </div>

          <div className="iraWhat-imgContent">
              <img className="iraWhat-img" alt="iraWhat-img" width={400} height={400} src={IraWhatImg} />
              
              <Link className="iraWhat-videoLink" to=''> 
                <img className="iraWhat-imgLink" alt="iraWhat-videoImg" width={760} height={400} src={IraWhatVideoImg} />
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}