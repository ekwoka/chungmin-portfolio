import Hero from '../../components/hero';
import homeContent from '../../../content/pages/home.md';
import Markdown from 'markdown-to-jsx';
import { getDetails } from '../../data/utils';

const details = getDetails(homeContent);
const body = homeContent.replace(/---(.*\n)*---/, '');

const Home = () => (
  <main>
    <Hero img={details.image} />
    {body.length > 5 && (
      <Markdown class="prose prose-neutral mx-auto pt-8">{body}</Markdown>
    )}
  </main>
);

export default Home;
