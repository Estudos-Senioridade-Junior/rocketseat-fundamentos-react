import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/PatrickcBrito88.png"
                        alt="author"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Patrick Brito</strong>
                        <span>BackendDeveloper</span>
                    </div>
                </div>
                <time title="11 de maio às 08:13" dateTime="2022-05-11">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
                    Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 jane.design/doctorcare</p>
                <p>#novoprojeto #nlw #rocketseat</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"

                />
                <footer>
                    <button
                        type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}