import React from 'react'
import { mockPosts } from '../data/mockPosts'
import PostCard from '../components/PostCard'

function Home() {
    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <header style={{ marginBottom: '32px', textAlign: 'center' }}>
                <h1>Blog do TADS</h1>
                <p style={{ color: '#6b7280' }}>Acompanhe as últimas publicações da turma</p>
            </header>

            <section>
                {mockPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        titulo={post.titulo}
                        autor={post.autor}
                        data={post.data}
                        resumo={post.resumo}
                        categoria={post.categoria}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home