import { formatNumber } from './Utils';

const MainClientContent = (props) => {
    const {user} = props;
    console.log(user);

    const transactions = user.transactions.map((transaction, index) => {
      const className = index % 2 === 0 ? 'even' : 'odd'
      return <div className={`transaction-item ${className}`}>
        <div>{transaction.date}</div>
        <div>{transaction.title}</div>
        <div>{transaction.type === 'debit' ? formatNumber(transaction.amount * -1) : formatNumber(transaction.amount)}</div>
      </div>
    });


    return (
      <section id="main-content">
        <h1 className="main">My Account</h1>
        <div id="transactions">
          <h2>Transactions</h2>
          <div id="transaction-div">
          {transactions}
          </div>
        </div>
      </section>
    )
}

export default MainClientContent
