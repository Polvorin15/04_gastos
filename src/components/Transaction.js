import { useGlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useGlobalContext();


    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <ul className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button
            onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </ul>
    )
}
