import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import RespImage from '../../components/respImage';

export default function Hero({ img }) {
  return (
    <section class="relative flex flex-col items-center w-full">
      <RespImage
        src={img}
        class="object-cover w-full min-h-screen opacity-50"
        alt="AC Hotel Main Lobby"
        loading="eager"
      />
    </section>
  );
}
