import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'

export default function Home() {
  return (
    <div>
      Página segura - Perfil do usuário
    </div>
  )
}


export const getServerSideProps = async ({req, res}) => {
  // Essa função ta dentro do backend, significa que eu posso conectar com funções lá do Services. E precisa necessariamente retornar alguma coisa

  try{ // Quero chamar chamar essa função e verificar de fato se esse dado é válido
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('Token Inválido')

    verifica(token)

    return{
      props: {}
    }
  } catch (err){
    return{
      redirect:{
        permanent: false,
        destination: '/login'
      },
      props: {}
    }

  }
}