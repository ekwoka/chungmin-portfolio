import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export default function AsymetricGrid() {
  return (
    <image-grid class="grid grid-cols-1 text-stone-50 md:grid-cols-2 md:grid-rows-2 md:p-6 md:gap-6  md:text-stone-900">
      <div class="relative overflow-hidden md:rounded-lg cursor-pointer group md:row-span-2 h-[75vh] md:h-full">
        <img src="https://placekitten.com/800/800" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center h-full group-hover:opacity-75 " />
        <div aria-hidden="true" class="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black md:hidden" />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:group-hover:flex md:items-center md:justify-center">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              Projects
              <ArrowNarrowRightIcon class="inline-block w-8 h-8 ml-4 align-middle" />
            </a>
          </h3>
        </div>
      </div>
      <div class="relative overflow-hidden md:rounded-lg cursor-pointer group h-[75vh] md:h-full">
        <img src="https://placekitten.com/801/801" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-cover object-center w-full h-full group-hover:opacity-75" />
        <div aria-hidden="true" class="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black md:hidden" />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:group-hover:flex md:items-center md:justify-center">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              AC Hotel
              <ArrowNarrowRightIcon class="inline-block w-8 h-8 ml-4 align-middle" />
            </a>
          </h3>
        </div>
      </div>
      <div class="relative overflow-hidden md:rounded-lg cursor-pointer group h-[75vh] md:h-full">
        <img src="https://placekitten.com/804/804" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="object-cover object-center w-full h-full group-hover:opacity-75" />
        <div aria-hidden="true" class="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black md:hidden" />
        <div class="absolute inset-0 flex flex-col justify-end p-6 text-2xl md:hidden md:group-hover:flex md:items-center md:justify-center">
          <h3 class="font-semibold">
            <a href="#">
              <span class="absolute inset-0" />
              Moxy
              <ArrowNarrowRightIcon class="inline-block w-8 h-8 ml-4 align-middle" />
            </a>
          </h3>
        </div>
      </div>
    </image-grid>
  );
}
