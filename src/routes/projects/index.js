import { usePrerenderData } from '../../plugins/preact/prerender-data-provider/hook';

import { GridItem } from '../../components/galleries/projectGrid';

export default function Projects(props) {
  const [data, isLoading] = usePrerenderData(props);
  if (isLoading) return;

  if (data.data) {
    const projects = data.data;
    const sorted = projects[0].details.priority
      ? projects.sort(
          (a, b) =>
            parseInt(a.details.priority, 10) - parseInt(b.details.priority, 10)
        )
      : projects;
    return (
      <main class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 w-full max-w-screen-2xl p-0 md:p-4 mt-16 md:mt-36 mx-auto">
        {sorted.map((project, i) => (
          <GridItem
            key={project.id}
            details={project.details}
            href={project.id.replace('.md', '')}
            loading={i < 3 ? 'eager' : 'lazy'}
          />
        ))}
      </main>
    );
  }
}
