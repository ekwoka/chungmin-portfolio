import RespImage from '../../components/respImage';

export default function Hero({ img, className, alt }) {
  return (
    <section class="relative flex w-full flex-col items-center">
      <RespImage src={img} class={className} alt={alt} loading="eager" />
    </section>
  );
}
