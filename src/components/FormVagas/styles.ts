import styled from 'styled-components'

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

export const Formulario = styled.form<FormProps>`
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: ${(props) => props.theme.corSecundaria};
    padding: 32px;
    border-radius: 12px;
    margin-top: 40px;
`
interface InputProps {
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export const Input = styled.input<InputProps>`
    padding: 0 16px;
    outline-color: ${(props) => props.theme.corPrincipal};
`
interface BotaoProps {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

export const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => props.theme.corPrincipal};
    border: 1px solid ${(props) => props.theme.corPrincipal};
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: ${(props) => props.theme.corSecundaria};
    margin-left: 8px;
    cursor: pointer;
`