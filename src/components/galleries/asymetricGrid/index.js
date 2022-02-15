import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import RespImage from '../../respImage';

export default function AsymetricGrid() {
  return (
    <image-grid class="grid grid-cols-1 text-neutral-50 md:grid-cols-2 md:grid-rows-2 md:gap-6 md:p-6 md:text-neutral-900">
      <div class="group relative h-[75vh] cursor-pointer overflow-hidden md:row-span-2 md:h-full md:rounded-lg">
        <RespImage
          src="https://placekitten.com/800/800"
          alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
          class="h-full object-cover object-center group-hover:opacity-75 "
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 md:hidden"
        />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:items-center md:justify-center md:group-hover:flex">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              Projects
              <ArrowNarrowRightIcon class="ml-4 inline-block h-8 w-8 align-middle" />
            </a>
          </h3>
        </div>
      </div>
      <div class="group relative h-[75vh] cursor-pointer overflow-hidden md:h-full md:rounded-lg">
        <RespImage
          src="https://placekitten.com/801/801"
          alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
          class="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 md:hidden"
        />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:items-center md:justify-center md:group-hover:flex">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              AC Hotel
              <ArrowNarrowRightIcon class="ml-4 inline-block h-8 w-8 align-middle" />
            </a>
          </h3>
        </div>
      </div>
      <div class="group relative h-[75vh] cursor-pointer overflow-hidden md:h-full md:rounded-lg">
        <RespImage
          src="https://placekitten.com/804/804"
          alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
          class="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 md:hidden"
        />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:items-center md:justify-center md:group-hover:flex">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              Moxy
              <ArrowNarrowRightIcon class="ml-4 inline-block h-8 w-8 align-middle" />
            </a>
          </h3>
        </div>
      </div>
    </image-grid>
  );
}
