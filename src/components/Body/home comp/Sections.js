import styles from'./Home.module.css';
import {Link } from 'react-router-dom'
import HomeSection from './HomeSection';

const Sections = props=>{
    return<>
            <div className={`${styles.home}`} id="home" >
            <HomeSection img='imgs/slider&home/home1.png' position="left">
                <h1>Women Corner</h1>
                <p>Great sales on women products On the occasion of mother day.</p>
                <span>40%</span>
                <button><Link to='/Products'> Get Now </Link></button>
            </HomeSection>
            
            <HomeSection img='imgs/slider&home/home2.png' position="right">
                <h1>Men Corner</h1>
                <p>Great sales on women products On the occasion of mother day.</p>
                <span>35%</span>
                <button><Link to='/Products'> Get Now </Link></button>
            </HomeSection>
            
            <HomeSection img='imgs/slider&home/home3.png' position="left">
                <h1>Childern Corner</h1>
                <p>Great sales on women products On the occasion of mother day.</p>
                <span>50%</span>
                <button><Link to='/Products'> Get Now </Link></button>
            </HomeSection>
            
        </div>
    </>
}

export default Sections;