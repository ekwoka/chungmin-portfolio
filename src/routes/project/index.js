import Markdown from 'markdown-to-jsx';
import ProjectHero from '../../components/project/hero';
import ImageSlider from '../../components/galleries/imageSlider';
import RespImage from '../../components/respImage';

import projectContent from '../../../content/projects/ac-hotel.md';

export default function Project() {
  return (
    <main class="flex flex-col gap-4">
      <ProjectHero />
      <Markdown
        class="px-8 mx-auto prose"
        options={{
          wrapper: 'article',
          forceWrapper: true,
          overrides: {
            ImageSlider: { component: ImageSlider },
            img: { component: RespImage },
          },
        }}>
        {projectContent.replace(/---(.*\n)*---/, '')}
      </Markdown>
    </main>
  );
}
