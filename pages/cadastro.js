import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../scr/components/loginCard/loginCard'
import Input from '../scr/components/input/input'
import Button from '../scr/components/button/button'


export default function CadastroPage(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const router = useRouter()
    
    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,  //Os 3 pontos copiam todas as informações do formData
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => { // Validar quando o form for enviado
        try{
            event.preventDefault() // Previnir que a página seja recarregada
            const response = await fetch(`/api/user/cadastro`, {method: 'POST',
            body: JSON.stringify(formData)}) // Vai chamar a API, frontend se conectando com o backend

            const json = await response.json()
            if (response.status !== 201) throw new Error(json)

            // Função setCookie vai criar um cookie que vai armazenar a informação no nosso navegador
            setCookie('authorization', json)
            router.push('/')

        } catch (err){
            setError(err.message)
        }
    }

    return(
        <div className={styles.background}>
            <LoginCard title='Crie sua conta'>
            <form onSubmit={handleForm} className={styles.form}>
                    <Input type="text" placeholder="Nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
                    <Input type="email" placeholder="E-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                    <Input type="password" placeholder="Senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/> 
                    <Button>Cadastrar</Button>
                    {error && <p className={styles.error}>{error}</p>}
                    <Link className={styles.link}href="/login">Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}