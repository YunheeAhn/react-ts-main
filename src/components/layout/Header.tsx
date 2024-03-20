import { Link } from 'react-router-dom'

type HeaderProps = {
    name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => (
    <header>
        <h1>{name}</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/signin">signin</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
