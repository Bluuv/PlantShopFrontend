import React, { useState } from 'react';
import axios from 'axios';
import styles from './Wallet.module.css'; 

function Wallet() {
    const [money, setMoney] = useState<number | ''>(''); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAddMoney = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/shop/manage-account/add-money', null, {
                params: { money }
            });

            if (response.status === 200) {
                setSuccess(true); 
                setMoney(''); 
            } else {
                setError('Failed to add money. Please try again.');
            }
        } catch (err) {
            setError('Error during request. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <div className={styles.walletContainer}>
            <div className={styles.walletBox}>
                <h2>Wallet</h2>
                <form onSubmit={handleAddMoney}>
                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>Money added successfully!</p>}
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={money}
                        onChange={(e) => setMoney(Number(e.target.value))}
                        required
                    />
                    <button type="submit">Add Money</button>
                </form>
            </div>
        </div>
    );
}

export default Wallet;
