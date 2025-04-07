import logo from '../assets/chef-claude-icon.png'
import styles from '../ChefClaude.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src={logo} alt="Chaf Claude Logo"/>
                <h1>Chef Claude</h1>
            </nav>
        </header>
    )
}