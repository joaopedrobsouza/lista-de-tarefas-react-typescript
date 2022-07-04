import { useCallback, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin"
import { ButtonLogin } from "./components/ButtonLogin"
import { UsuarioLogadoContext } from "../../shared/contexts"
import { useUsuarioLogado } from "../../shared/hooks"

export const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    const inputSenhaRef = useRef<HTMLInputElement>(null)

    const {nomeDoUsuario} = useUsuarioLogado();

    const emailLength = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha])

    return(
        <div>
            <form>
            <h1>{nomeDoUsuario}</h1>
            <p>Quantidade de caracteres: {emailLength}</p>

                <InputLogin 
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputSenhaRef.current?.focus()}
                />
                
                <InputLogin 
                label="Senha"
                type="password"
                value={senha}
                ref={inputSenhaRef}
                onChange={newValue => setSenha(newValue)}
                />

                <ButtonLogin type="button" onClick={handleEntrar}>Entrar</ButtonLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>Cadastrar</ButtonLogin>

            </form>
        </div>
    )
}
