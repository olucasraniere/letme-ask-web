import { Link, useParams, Navigate } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  /* se não houver um ID na URL ou se o usuário apagar, retorna pra raíz */
  /* o 'replace' impede que o usuário volte para o endereço anterior usando o voltar do navegador */
  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      <div>Room Details</div>

      {JSON.stringify(params)}

      <Link className="underline" to="/rooms">
        Ver todas as salas
      </Link>
    </div>
  )
}
