import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type getRoomsAPIResponse = Array<{
  id: string
  name: string
}>

export function Rooms() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: getRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div>
      <div>Rooms</div>

      {/* Se isLoading for TRUE, mostra o texto Carregando..., se não, não mostra nada (NULL) */}
      {/*isLoading ? <p>Carregando...</p> : null*/}

      {/* Se não quiser usar ternário, pode usar: */}
      {/* Só mostra o texto Carregando... se isLoading for TRUE */}
      {isLoading && <p>Carregando...</p>}

      {/* Se exister um data, mostra o JSON da requisição */}
      {/* <pre>{data && JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex flex-col gap-1">
        {/* Se exister um data, então vou percorrer cada room que está dentro de data e mostrar a lista das salas */}
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
