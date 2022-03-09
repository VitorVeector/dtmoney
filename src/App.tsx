import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;
  font-size: 4rem;
  button{
    padding: 2rem;
    color: red
  }
` 

function App() {
  return (
    <div className="App">
      <Title>
        Hello World
        <button>Alerta vermelho</button>
      </Title>
    </div>
  );
}

export default App


