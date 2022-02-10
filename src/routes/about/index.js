import Markdown from 'markdown-to-jsx';
import aboutContent from '../../../content/pages/about.md';
import { getMD } from '../../data/utils';

const [details, body] = getMD(aboutContent);

export default function About() {
  return (
    <main class="w-full">
      {body.length > 5 && (
        <Markdown class="prose prose-neutral mx-auto pt-24">{body}</Markdown>
      )}
    </main>
  );
}
