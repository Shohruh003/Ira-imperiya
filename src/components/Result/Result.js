import './result.css'

export const Result = () => {
  return (
    <div className="result">
      <div className="container">
        <div className="result-inner">
          <ul className="result-list">
            <li className="result-item">
              <span className="result-title">Transactions/Second</span>
              <span className="result-quatity">2,905</span>
            </li>

            <li className="result-item">
              <span className="result-title">Total Transactions</span>
              <span className="result-quatity">$64,540,470,129</span>
            </li>

            <li className="result-item">
              <span className="result-title">Avg. Cost/Transaction</span>
              <span className="result-quatity">$0.00025</span>
            </li>

            <li className="result-item">
              <span className="result-title">Validator Nodes</span>
              <span className="result-quatity">1,645</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}