import RespImage from '../../respImage';
import { Link } from 'preact-router/match';
import Arrow from '../../../svg/arrow';

const src = '/images/uploads/AC-hotel_lobby.jpg';

export default function ProjectHero() {
  return (
    <project-hero class="w-full max-h-[85vh] md:flex md:flex-col md:pt-32 block">
      <Link href="/projects" class="hidden md:block order-first">
        <Arrow class="ml-16 my-8 w-auto h-6 text-neutral-900" />
      </Link>

      <RespImage
        class="w-full max-h-[75vh] min-h-[50vh] md:min-h-0 object-cover order-last shadow md:shadow-none"
        src={src}
        loading="eager"
      />
      <project-info class="px-8 pt-8 mx-auto w-full max-w-prose font-goldenbook order-1 md:ml-16 md:pl-0 md:pt-4 md:pb-8 block">
        <h1 class="text-4xl md:text-5xl block uppercase">AC Hotel</h1>
        <h2 class="text-lg md:text-3xl block">Gangnam, Seoul, South Korea</h2>
      </project-info>
    </project-hero>
  );
}
