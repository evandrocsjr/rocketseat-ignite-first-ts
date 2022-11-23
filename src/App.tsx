import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import styles from "./App.module.css"

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

interface Post extends PostProps{
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/evandrocsjr.png",
      name: "Evandro Cunha",
      role: "Sênior Engineer"
    },
    contentGeneral : [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/evandrocsjr.png",
      name: "João Paulo",
      role: "Engineer"
    },
    contentGeneral : [
      { type: 'paragraph', content: 'Fala ssssssssssssgaleraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                contentGeneral={post.contentGeneral}
                publishedAt={post.publishedAt}
              />
            )  
          })}
        </main>
      </div>
    </div>
  )
}

export default App