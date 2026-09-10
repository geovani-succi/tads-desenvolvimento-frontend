import React from 'react'

function PostCard({titulo, autor, data, resumo, categoria}) {
  return (
  <article className="post-card">
      <span className="post-badge">{categoria}</span>
      <h2 className="post-title">{titulo}</h2>
      <p>{resumo}</p>
      <div className="post-footer">
        <small>Por <strong>{autor}</strong> em {data}</small>
      </div>
    </article>
  )
}

export default PostCard