import { useState } from 'react'
import type { Aluno } from './types'
import AlunoCard from './AlunoCard'
import './App.css'

const alunos: Aluno[] = [
  { id: 1, nome: 'Ana', nota: 8.5 },
  { id: 2, nome: 'Bruno', nota: 5.2 },
  { id: 3, nome: 'Carla', nota: 9.0 },
]

function calcularMedia(lista: Aluno[]): number {
  const soma = lista.reduce((total, aluno) => total + aluno.nota, 0)
  return soma / lista.length
}

function App() {
  const [contador, setContador] = useState<number>(0)

  return (
    <div className="container">
      <h1>Aula 12 - TypeScript + React</h1>

      <section>
        <h2>Lista de alunos</h2>
        <ul className="lista-alunos">
          {alunos.map((aluno) => (
            <AlunoCard key={aluno.id} aluno={aluno} />
          ))}
        </ul>
        <p>Média da turma: {calcularMedia(alunos).toFixed(1)}</p>
      </section>

      <section>
        <h2>Contador (useState tipado)</h2>
        <p>Cliques: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Clicar</button>
      </section>
    </div>
  )
}

export default App
