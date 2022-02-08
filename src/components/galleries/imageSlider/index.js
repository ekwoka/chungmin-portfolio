import { cloneElement } from 'preact';

export default function ImageSlider({ children }) {
  return (
    <image-slider class="w-full">
      <slider-items class="w-full h-full flex flex-row overflow-x-auto gap-2 flex-nowrap snap-x snap-proximity px-6 hide-scrollbar md:grid md:grid-cols-2 md:overflow-hidden">
        {children
          .filter((child) => typeof child === 'object')
          .map((child, index) =>
            cloneElement(child, {
              key: index,
              class: 'w-[75vw] h-full object-cover snap-center md:w-full',
            })
          )}
      </slider-items>
    </image-slider>
  );
}
