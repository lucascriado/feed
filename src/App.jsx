import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post 
            author="Lucas Criado"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod."
          />
          <Post 
            author="Paulo Eduardo"
            content="Nullam magna nulla, suscipit eget gravida sit amet, iaculis vel."
          />
        </main>
      </div>
    </div>  
    
  )
}
