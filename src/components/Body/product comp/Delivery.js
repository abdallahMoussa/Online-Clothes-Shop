import styles from './Delivery.module.css';

const Delivery = ()=>{
    return(
        <div className={styles.deliveryReturn}>
           
                <span className={styles.policy}>Product delivery and return</span>
                <hr/>
                <br/>
                <div>
                    <div className={styles.policySection}>
                        <i className={`${styles.icons} fa fa-truck `}></i>
                        <span>DELVIERY</span>
                        <div>
                            <span>Delivery to your door.</span><br/>
                            <span>Delivery within 24 hours.</span><br/>
                            <span>Paiement when recieving.</span>

                        </div>
                    </div><br/>

                    <div className={styles.policySection}>
                        <i className={`${styles.icons} fa fa-rotate `}></i>
                        <span>RETURN</span>
                        <div>
                            <span> Free return of products for 14 days.</span><br/>
                            <span> underwear and personal use products doesn`t return.</span><br/>
                            <span> 30 days for damaged products.</span><br/>
                            <span> report within 24 hours from receipt date.</span>

                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Delivery;