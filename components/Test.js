async function getServerSideProps() {
    const data = await fetch('https://greenhouseapi.herokuapp.com/greenhouse/data/')
  
    const todos = await data.json()
  
    return {
      todos
    }
  }

export default function Test() {
    const todos = getServerSideProps();
    return (
        <>
            <ul >
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.id} - {todo.moisture}
                    </li>
                ))}
            </ul>
        </>
    )
}