import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
    onRequestOpenNewTransactionModal: () => void
}

export function Header({ onRequestOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onRequestOpenNewTransactionModal} type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}