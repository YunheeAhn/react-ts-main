import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'; 

type HeaderProps = {
    name: string
}
const StyledListItem = styled.div`
    ${(props: any) => css` // StyledListItem 컴포넌트에 props를 전달할 수 있도록 함
        color: ${props.theme.colors.success}; // 테마에서 가져온 'success' 색상 사용
    `}
`;

const Header: React.FC<HeaderProps> = ({ name }) => (
    <header>
        <h1 className="text-blue-600">{name}</h1>
        <StyledListItem>안녕하세요</StyledListItem>
        <nav>
            <ul>
                <li>
                    <Link to="/" >home</Link>
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

