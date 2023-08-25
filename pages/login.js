import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../scr/components/loginCard/loginCard'
import Input from '../scr/components/input/input'
import Button from '../scr/components/button/button'

export default function LoginPage(){
    return(
        <div className={styles.background}>
            <LoginCard title='Entre em sua conta'>
                <form className={styles.form}>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha"/> 
                    <Button>Entrar</Button>
                    <Link className={styles.link}href="/cadastro">Ainda não possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}