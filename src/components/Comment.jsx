import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github/com/lucaswantz.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Motta</strong>

              <time
                title="14 de Outubro às 08:13h"
                dateTime="2024-10-14 08:13:30"
              >
                Cerca de 2 horas atrás
              </time>

              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </div>
          </header>
          <p>Muito bom Devon, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
