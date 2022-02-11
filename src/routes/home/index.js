import Hero from '../../components/hero';
import homeContent from '../../../content/pages/home.md';
import Markdown from 'markdown-to-jsx';
import { getMD, pageMDOptions } from '../../data/utils';

const [details, body] = getMD(homeContent);

const Home = () => (
  <main>
    <Hero img={details.image} className="min-h-screen w-full object-cover" />
    {body.length > 5 && (
      <Markdown
        class="prose prose-neutral mx-auto py-8 px-4"
        options={pageMDOptions}>
        {body}
      </Markdown>
    )}
  </main>
);

export default Home;
