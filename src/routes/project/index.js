import Markdown from 'markdown-to-jsx';

import project from '../../../content/projects/ac-hotel.md';

import ProjectHero from '../../components/project/hero';
import ImageSlider from '../../components/galleries/imageSlider';

export default function Project() {
  return (
    <main class="flex flex-col gap-4">
      <ProjectHero />
      <ImageSlider>
        <img src="https://placekitten.com/800/800" />
        <img src="https://placekitten.com/800/800" />
        <img src="https://placekitten.com/800/800" />
      </ImageSlider>
      <Markdown
        class="px-8 mx-auto prose"
        options={{
          wrapper: 'article',
          forceWrapper: true,
          overrides: { ImageSlider: { component: ImageSlider } },
        }}>
        {project.replace(/---(.*\n)*---/, '')}
      </Markdown>
    </main>
  );
}
