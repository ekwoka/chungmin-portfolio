import RespImage from '../../respImage';
import { Link } from 'preact-router/match';
import Arrow from '../../../svg/arrow';

export default function ProjectHero({ details: { hero, title, location } }) {
  return (
    <project-hero class="block max-h-[85vh] w-full md:flex md:flex-col md:pt-32">
      <Link href="/projects" class="order-first hidden md:block">
        <Arrow class="my-8 ml-16 h-6 w-auto text-neutral-900" />
      </Link>

      <RespImage
        class="order-last max-h-[75vh] min-h-[50vh] w-full object-cover shadow md:min-h-0 md:shadow-none"
        src={hero}
        loading="eager"
      />
      <project-info class="order-1 mx-auto block w-full max-w-prose px-8 pt-8 font-goldenbook md:ml-16 md:pl-0 md:pt-4 md:pb-8">
        <h1 class="block text-4xl uppercase md:text-5xl">{title}</h1>
        {location && <h2 class="block text-lg md:text-3xl">{location}</h2>}
      </project-info>
    </project-hero>
  );
}
