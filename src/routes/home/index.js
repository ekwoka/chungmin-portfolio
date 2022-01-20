import { h } from 'preact';
import style from './style.css';
import Markdown from 'markdown-to-jsx';
import content from '../../../content/test.md';

const Home = () => (
	<div class={style.home}>
		<h1 class="text-xl">Home</h1>
		<p>This is the Home component.</p>
		<Markdown children={ content.replace(/---(.*\n)*---/, '') } className="prose" options={{ wrapper: 'article', forceWrapper: true }} />
	</div>
);

export default Home;
