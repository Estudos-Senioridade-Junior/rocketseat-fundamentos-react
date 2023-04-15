import './global.css'
import {Header} from "./components/Header.jsx";
import {Post} from "./components/Post.jsx";
import styles from './App.module.css'
import {Sidebar} from "./components/Sidebar.jsx";

function App() {

    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>

                <Sidebar/>

                <main>
                    <Post
                        author="John Doe"
                        content="lorem ipsum"
                    />

                    <Post
                        author="Patrick"
                        content="Um novo post"
                    />

                    <Post
                        author="Patrick"
                        content="Um novo post"
                    />
                </main>
            </div>
        </div>
    )
}

export default App
