import './header.css';

const Header = () => {
    return(
        <header>
            <div className='header--logo'>
                <img src="./imgs/Logo.png" alt="Magellan UC Logo" className='header--img'/>
                <div className='logo--text'>
                    <span className='header--company-name'>Magellan Group</span>
                    <span className='header--company-desc'>High quality utility infrastructure</span>
                </div>
            </div>
        </header>
    )
}

export default Header;