import Markdown from 'markdown-to-jsx';

import project from '../../../content/projects/ac-hotel.md';

import ProjectHero from "../../components/project/hero";

export default function Project() {
  return (
    <main class="flex flex-col gap-4">
      <ProjectHero />
      <Markdown class="px-8 mx-auto prose" options={{ wrapper: 'article', forceWrapper: true }}>
        {project.replace(/---(.*\n)*---/, '')}
      </Markdown>
    </main>
  );
}
