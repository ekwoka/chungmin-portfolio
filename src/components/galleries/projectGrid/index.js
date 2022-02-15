import RespImage from '../../../components/respImage';
import { Link } from 'preact-router/match';
import Arrow from '../../../svg/arrow';

export function GridItem({
  details: { title, thumbnail, hero },
  href,
  loading,
}) {
  return (
    <Link href={`/project/${href}`} class="group min-h-8 relative w-full">
      <RespImage
        src={thumbnail ? thumbnail : hero}
        class="h-full w-full object-cover transition-opacity md:group-hover:opacity-75"
        alt={title}
        loading={loading}
      />
      <dark-overlay class="absolute inset-0 bg-gradient-to-tr from-neutral-900/75 to-transparent transition-opacity md:bg-neutral-900 md:opacity-0 md:group-hover:opacity-75" />
      <project-details class="absolute inset-0 contents flex-col items-center justify-center p-4 transition-opacity md:flex md:opacity-0 md:group-hover:opacity-100">
        <h2 class="absolute inset-x-8 bottom-4 block font-goldenbook text-2xl uppercase text-neutral-100 md:static md:text-center">
          {title}
        </h2>
        <Arrow class="hidden h-8 w-16 rotate-180 text-neutral-100 md:block" />
      </project-details>
    </Link>
  );
}
