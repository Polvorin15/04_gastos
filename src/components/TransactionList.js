import { Transaction } from './Transaction';
import { useGlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useGlobalContext();


    return (
    <>
        <h3>History</h3>
            <li className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
                {transaction} />))}
        </li>
    </>

    )
}
