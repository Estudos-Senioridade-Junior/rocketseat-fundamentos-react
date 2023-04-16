import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";
export function Comment({content, onCommentDelete}){

    function handleDeleteComment(event){
        onCommentDelete(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/PatrickcBrito88.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Patrick Brito</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-11">Cerca de 1h atrás</time>
                        </div>

                        <button
                            title="Apagar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}