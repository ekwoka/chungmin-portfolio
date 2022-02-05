import heroImage from '../../../static/images/uploads/l1-main-lobby-edited-by-wes_020821.jpg';

export default function ProjectHero() {
  return (
    <project-hero class="w-full max-h-[75vh] relative shadow">
      <img class="w-full max-h-[75vh] min-h-[50vh] md:min-h-0 object-cover" src={heroImage} />
      <project-info class="absolute inset-x-0 bottom-0 p-4 mx-auto max-w-prose bg-stone-50/50 backdrop-blur">
        <h1 class="text-4xl">AC Hotel</h1>
        <h2 class="text-lg">Gangnam, Seoul, South Korea</h2>
        <h2 class="text-lg">Senior Designer, Assistant Design Director</h2>
      </project-info>
    </project-hero>
  );
}
