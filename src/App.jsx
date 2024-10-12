import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

function App() {
	return (
		<div>
			<Header />
			<Post
				author="Lucas Motta"
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae eveniet sit rerum voluptate omnis, autem maiores fugiat mollitia nisi quos nobis ea doloremque tenetur voluptatibus quisquam repellendus eius modi?"
			/>
		</div>
	);
}

export default App
