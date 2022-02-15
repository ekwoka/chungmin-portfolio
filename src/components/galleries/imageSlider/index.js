import { cloneElement } from 'preact';

export default function ImageSlider({ children }) {
  return (
    <image-slider class="block w-full md:contents">
      <slider-items class="hide-scrollbar flex h-full w-full snap-x snap-proximity flex-row flex-nowrap gap-2 overflow-x-auto px-6 md:grid md:grid-cols-2 md:overflow-hidden">
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
