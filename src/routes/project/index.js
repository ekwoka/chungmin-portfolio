import Markdown from 'markdown-to-jsx';
import ProjectHero from '../../components/project/hero';
import ImageSlider from '../../components/galleries/imageSlider';
import RespImage from '../../components/respImage';

import projectContent from '../../../content/projects/ac-hotel.md';

export default function Project() {
  return (
    <main class="flex flex-col gap-4 min-h-max h-full bg-neutral-100 w-full">
      <ProjectHero />
      <Markdown
        class="px-8 mx-auto prose min-h-max h-full prose-neutral relative font-proxima"
        options={{
          wrapper: 'article',
          forceWrapper: true,
          overrides: {
            ImageSlider: { component: ImageSlider },
            img: {
              component: RespImage,
              props: {
                class:
                  'w-full lg:-mx-[35vw] lg:w-[70vw] lg:relative lg:inset-x-1/2 lg:max-w-[70vw]',
              },
            },
            p: {
              props: {
                class: 'leading-loose',
              },
            },
          },
        }}>
        {projectContent.replace(/---(.*\n)*---/, '')}
      </Markdown>
    </main>
  );
}
