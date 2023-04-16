import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {useState} from "react";

export function Post({author, publishedAt, content}) {

    const publishedAtFormatted = format(publishedAt, "d 'de' MM 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState(['Post muito bacana, hein']);
    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentTextChange(event) {
        setNewCommentText(event.target.value);
    }

    function handleNewCommentSubmit(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>}
                    })}
            </div>

            <form
                onSubmit={handleNewCommentSubmit}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentTextChange}
                />
                <footer>
                    <button
                        type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment}/>}
                )}
            </div>
        </article>
    )
}