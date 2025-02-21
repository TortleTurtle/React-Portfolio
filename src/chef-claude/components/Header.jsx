import logo from '../assets/chef-claude-icon.png'

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Chaf Claude Logo"/>
                <h1>Chef Claude</h1>
            </nav>
        </header>
    )
}