import Hero from '../../components/hero';
import homeContent from '../../../content/pages/home.md';
import Markdown from 'markdown-to-jsx';
import { getMD } from '../../data/utils';

const [details, body] = getMD(homeContent);

const Home = () => (
  <main>
    <Hero img={details.image} className="min-h-screen" />
    {body.length > 5 && (
      <Markdown class="prose prose-neutral mx-auto pt-8">{body}</Markdown>
    )}
  </main>
);

export default Home;
