import Markdown from 'markdown-to-jsx';
import ProjectHero from '../../components/project/hero';
import { usePrerenderData } from '../../plugins/preact/prerender-data-provider/hook';
import { projectMDOptions } from '../../data/utils';

export default function Project(props) {
  const [data, isLoading] = usePrerenderData(props);
  if (isLoading) {
    return (
      <main class="flex h-screen flex-col items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl font-bold">Loading...</h1>
        </div>
      </main>
    );
  }

  if (data?.data) {
    const { content, details } = data.data;
    return (
      <main class="mx-auto flex h-full min-h-max w-full max-w-screen-2xl flex-col gap-4 bg-neutral-100">
        <ProjectHero details={details} />
        <Markdown
          class="prose prose-neutral relative h-full min-h-max max-w-full px-8 font-proxima lg:grid lg:grid-flow-row lg:grid-cols-4 lg:items-center lg:justify-center lg:gap-x-4"
          options={projectMDOptions}>
          {content}
        </Markdown>
      </main>
    );
  }

  return <div>Something went wrong...</div>;
}
