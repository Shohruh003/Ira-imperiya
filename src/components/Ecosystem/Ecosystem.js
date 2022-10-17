import EcoImg from '../../Images/ecosystem-img.png'
import './ecosystem.css'

export const Ecosystem = () => {

  return (
    <div className="ecosystem">
        <div className="container">
          <div className="ecosystem-inner">
            <div className="ecosystem-content">
              <p className='ecosystem-about'>Introducing <span className='ecosystem-span'>IRA (Imperiya)</span> </p>
              <h2 className='ecosystem-heading'>Living Ecosystem Decentralized Token</h2>
              <p className='ecosystem-text'>Imperiya tocen is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications.</p>

              <button className='ecosystem-getBtn' type="button">Get Started</button>
              <button className='ecosystem-aboutBtn' type="button">About Us</button>
            </div>

            <img className="ecosystem-img" alt="image" width={377} height={377} src={EcoImg} />
          </div>
        </div>
    </div>
  )
}