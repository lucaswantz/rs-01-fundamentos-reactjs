import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/github.png" />
					<div className={styles.authorInfo}>
						<strong>Github Actions</strong>
						<span>Desenvolvedor Fullstack</span>
					</div>
				</div>
				<time title="14 de Outubro às 08:13h" dateTime="2024-10-14 08:13:30">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
			<p>Fala galeraa 👋</p>
			<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
			<p>👉 jane.design/doctorcare</p>
			<p>#novoprojeto #nlw #rocketseat</p>
			</div>
		</article>
	);
}
