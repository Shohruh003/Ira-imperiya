import CreateWallet from '../../Images/create-wallet.png'
import AvlodCash from '../../Images/avlod-cash.png'
import Connect from '../../Images/connect.png'
import Swap from '../../Images/swap.png'
import './guide.css'

export const Guide = () => {
  return (
    <div className="guide">
      <div className="container">
        <div className="guide-inner">
          <h2 className="guide-heading">Quick Start Guide</h2>

          <ul className="guide-list">
            <li className="guide-item">
              <img className="guide-itemImg" alt="image" width={160} height={160} src={CreateWallet} />
              <div className="guide-itemContent">
                <h3 className="guide-itemHeading">Create a wallet</h3>
                <p className="guide-itemText">Create a Wallet using either a desktop computer or an mobile device</p>
              </div>
            </li>

            <li className="guide-item">
              <img className="guide-itemImg" alt="image" width={160} height={160} src={AvlodCash} />
              <div className="guide-itemContent">
                <h3 className="guide-itemHeading">2. Buy Imperiya from              Avlod Cash</h3>
                <p className="guide-itemText">You can buy Ethereum (ETH) directly on MetaMask or transfer it</p>
              </div>
            </li>

            <li className="guide-item">
              <img className="guide-itemImg" alt="image" width={160} height={160} src={Connect} />
              <div className="guide-itemContent">
                <h3 className="guide-itemHeading">3. Connect your wallet</h3>
                <p className="guide-itemText">Access your wallet to AoaSwap by clicking ‘Connect to a wallet’</p>
              </div>
            </li>

            <li className="guide-item">
              <img className="guide-itemImg" alt="image" width={160} height={160} src={Swap} />
              <div className="guide-itemContent">
                <h3 className="guide-itemHeading">4. Swap ETH to IRA</h3>
                <p className="guide-itemText">You can start swapping as you have ETH available! Press ‘Select a token’</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}