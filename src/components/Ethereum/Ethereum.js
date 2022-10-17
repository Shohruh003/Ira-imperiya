import EcoImg from '../../Images/ecosystem-img.png'
import './ethereum.css'

export const Ethereum = () => {

  return (
    <div className="ethereum">
        <div className="container">
          <div className="ethereum-inner">
            <div className="ethereum-content">
              <p className='ethereum-about'>Introducing 
                <span className='ethereum-span'> IRA (Imperiya)</span> 
              </p>

              <h2 className='ethereum-heading'>The Imperya token is a  function tocen of 5 company  made on the Ethereum blockchain system.</h2>

              <p className='ethereum-text'>Imperiya tocen is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications.</p>

              <button className='ethereum-getBtn' type="button">Buy tocen</button>
              <button className='ethereum-aboutBtn' type="button">White list</button>

              <ul className="quantity-list">
                <li className="quantity-item">
                  <span className="quantity-span">$0.75</span>
                  <span className="quantity-span">Price</span>
                </li>

                <li className="quantity-item">
                  <span className="quantity-span">2,897+</span>
                  <span className="quantity-span">Transaction</span>
                </li>

                <li className="quantity-item">
                  <span className="quantity-span">1,546</span>
                  <span className="quantity-span">Holders</span>
                </li>

                <li className="quantity-item">
                  <span className="quantity-span">563 000</span>
                  <span className="quantity-span">Sold</span>
                </li>
              </ul>
            </div>

            <img className="ethereum-img" alt="ethereum" width={377} height={377} src={EcoImg} />
          </div>
        </div>
    </div>
  )
}