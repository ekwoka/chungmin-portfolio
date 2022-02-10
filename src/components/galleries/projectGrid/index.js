import RespImage from '../../../components/respImage';
import { Link } from 'preact-router/match';
import Arrow from '../../../svg/arrow';

export function GridItem({
  details: { title, thumbnail, hero },
  href,
  loading,
}) {
  return (
    <Link href={`/project/${href}`} class="group w-full relative min-h-8">
      <RespImage
        src={thumbnail ? thumbnail : hero}
        class="w-full h-full object-cover md:group-hover:opacity-75 transition-opacity"
        alt={title}
        loading={loading}
      />
      <dark-overlay class="bg-gradient-to-tr from-neutral-900/75 to-transparent absolute inset-0 md:bg-neutral-900 md:opacity-0 md:group-hover:opacity-75 transition-opacity" />
      <project-details class="absolute inset-0 p-4 contents md:flex flex-col justify-center items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        <h2 class="block absolute bottom-4 inset-x-8 text-2xl text-neutral-100 font-goldenbook uppercase md:static md:text-center">
          {title}
        </h2>
        <Arrow class="text-neutral-100 rotate-180 w-16 h-8 hidden md:block" />
      </project-details>
    </Link>
  );
}
