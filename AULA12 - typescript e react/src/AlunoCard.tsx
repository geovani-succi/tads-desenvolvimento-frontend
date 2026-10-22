import type { Aluno } from './types'

interface AlunoCardProps {
  aluno: Aluno
}

function AlunoCard({ aluno }: AlunoCardProps) {
  const situacao: string = aluno.nota >= 6 ? 'Aprovado' : 'Reprovado'

  return (
    <li className="aluno-card">
      <span className="aluno-nome">{aluno.nome}</span>
      <span className="aluno-nota">Nota: {aluno.nota}</span>
      <span className={situacao === 'Aprovado' ? 'situacao aprovado' : 'situacao reprovado'}>
        {situacao}
      </span>
    </li>
  )
}

export default AlunoCard
