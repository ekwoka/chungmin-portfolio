import Markdown from 'markdown-to-jsx';
import ProjectHero from '../../components/project/hero';
import ImageSlider from '../../components/galleries/imageSlider';
import RespImage from '../../components/respImage';

import projectContent from '../../../content/projects/ac-hotel.md';

export default function Project() {
  return (
    <main class="flex flex-col gap-4 min-h-max h-full bg-neutral-100 w-full max-w-screen-2xl mx-auto">
      <ProjectHero />
      <Markdown
        class="px-8 prose min-h-max h-full prose-neutral relative font-proxima lg:grid lg:grid-flow-row lg:grid-cols-4 max-w-full lg:gap-x-4 lg:justify-center lg:items-center"
        options={{
          wrapper: 'article',
          forceWrapper: true,
          overrides: {
            ImageSlider: { component: ImageSlider },
            img: {
              component: RespImage,
              props: {
                class:
                  'w-full lg:col-span-3 lg:block -mx-[50vw] w-[100vw] relative inset-x-1/2 max-w-[100vw] lg:mx-auto lg:w-full lg:static lg:inset-0 lg:max-w-full',
              },
            },
            p: {
              props: {
                class: 'leading-loose max-w-prose mx-auto lg:contents',
              },
            },
            Spacer: {
              component: 'div',
              class: 'hidden lg:block',
            },
          },
        }}>
        {projectContent.replace(/---(.*\n)*---/, '')}
      </Markdown>
    </main>
  );
}
