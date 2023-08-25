import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../scr/components/loginCard/loginCard'
import Input from '../scr/components/input/input'
import Button from '../scr/components/button/button'


export default function CadastroPage(){
    return(
        <div className={styles.background}>
            <LoginCard title='Crie sua conta'>
            <form className={styles.form}>
                    <Input type="text" placeholder="Nome"/>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha"/> 
                    <Button>Cadastrar</Button>
                    <Link className={styles.link}href="/login">Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}