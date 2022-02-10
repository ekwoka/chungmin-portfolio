import Markdown from 'markdown-to-jsx';
import ProjectHero from '../../components/project/hero';
import { usePrerenderData } from '../../plugins/preact/prerender-data-provider/hook';
import { projectMDOptions } from '../../data/utils';

export default function Project(props) {
  const [data, isLoading] = usePrerenderData(props);
  if (isLoading) {
    return (
      <main class="flex flex-col justify-center items-center h-screen">
        <div class="text-center">
          <h1 class="text-3xl font-bold">Loading...</h1>
        </div>
      </main>
    );
  }

  if (data?.data) {
    const { content, details } = data.data;
    return (
      <main class="flex flex-col gap-4 min-h-max h-full bg-neutral-100 w-full max-w-screen-2xl mx-auto">
        <ProjectHero details={details} />
        <Markdown
          class="px-8 prose min-h-max h-full prose-neutral relative font-proxima lg:grid lg:grid-flow-row lg:grid-cols-4 max-w-full lg:gap-x-4 lg:justify-center lg:items-center"
          options={projectMDOptions}>
          {content}
        </Markdown>
      </main>
    );
  }

  return <div>Something went wrong...</div>;
}
