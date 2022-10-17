import Table from '../../Images/table.png'
import Dot from '../../Images/dot.svg'
import Replace from '../../Images/replace.png'
import './improvement.css'
import { Link } from 'react-router-dom'

export const Improvement = () => {
  return (
    <div className="improvement">
      <div className="container">
        <div className="improvement-inner">
          <div className="improvement-total">
            <h2 className="total-heading">Total Improvement</h2>

            <div className="total-table">
              <img className="table-img" alt="table" width={451} height={438} src={Table} />

              <div className='table-div'>
                <h4 className='table-heading'>500.000.000 million Tocen Of Yangi Avlod Corporation.</h4>

                <ul className="table-list">
                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">100.000.000 million Tocen pieces were allocated to Developers</p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">100.000.000 million Tocen pieces were allocated to DEX per Exchange</p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Reserve Fund</p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Marketing </p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Company Expenses</p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Offline Business </p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Customer Benefit</p>
                  </li>

                  <li className="table-item">
                    <img className="table-itemDot" alt="table" width={20} height={20} src={Dot} />
                    <p className="table-itemText">50.000.000 million Tocen pieces were allocated to Charity Team</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="improvement-list">
            <li className="improvement-item">
              <h2 className="item-heading">IRA coin Community</h2>
              <p className="item-text">There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.</p>
              <Link className='item-link' to=''>Learn More</Link>
            </li>

            <li className="improvement-item improvement-itemBecome">
              <h2 className="item-heading item-headingBecome">Become a Validator</h2>
              <p className="item-text item-textBecome">Help secure the network by 
              running decentralized infrastructure. Learn about operating a validator node.</p>
              <Link className='item-link item-linkBecome' to=''>Learn More</Link>
            </li>

            <li className="improvement-item improvement-itemDev">
              <h2 className="item-heading">Dev. Resource</h2>
              <p className="item-text item-textDev">See the get started guide, videos, tutorials, SDKs, reference implementations, and more.</p>
              <img className="item-img" alt="Replace" width={350} height={118} src={Replace} />
              <Link className='item-link' to=''>Start Building</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}