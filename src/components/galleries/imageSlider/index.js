import { cloneElement } from 'preact';

export default function ImageSlider({ children }) {
  return (
    <image-slider class="w-full relative px-2">
      <slider-items class="w-full h-full flex flex-row overflow-x-auto gap-2 flex-nowrap snap-x snap-proximity px-4 hide-scrollbar">
          {children.map((child, index) => cloneElement(child, { key: index, class: "w-[75vw] h-full object-cover snap-center" }))}
      </slider-items>
      <left-fade class="bg-gradient-to-r from-slate-50 to-transparent absolute left-2 inset-y-0 w-1/6" />
      <right-fade class="bg-gradient-to-l from-slate-50 to-transparent absolute right-2 inset-y-0 w-1/6" />
    </image-slider>
  );
}
