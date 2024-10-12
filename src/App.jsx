import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import "./global.css";


function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Lucas Motta"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae eveniet sit rerum voluptate omnis, autem maiores fugiat mollitia nisi quos nobis ea doloremque tenetur voluptatibus quisquam repellendus eius modi?"
					/>
				</main>
			</div>
		</div>
	);
}

export default App
