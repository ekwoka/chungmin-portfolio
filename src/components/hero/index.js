import RespImage from '../../components/respImage';

export default function Hero({ img, className, alt }) {
  return (
    <section class="relative flex flex-col items-center w-full">
      <RespImage
        src={img}
        class={`object-cover w-full opacity-50 ${className}`}
        alt={alt}
        loading="eager"
      />
    </section>
  );
}
