import RespImage from '../../components/respImage';

export default function Hero({ img, className, alt }) {
  return (
    <section class="relative flex flex-col items-center w-full">
      <RespImage src={img} class={className} alt={alt} loading="eager" />
    </section>
  );
}
