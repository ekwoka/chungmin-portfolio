import heroImage from '../../static/images/uploads/l1-main-lobby-edited-by-wes_020821.jpg'

export default function Hero() {
    return (
        <section class="w-full relative">
            <img src={ heroImage } class="w-full opacity-80 min-h-screen object-cover" alt="AC Hotel Main Lobby" />
            <hero-content class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4">
                <h2 class="text-3xl tracking-wider block">
                    Senior Interior Designer with focus on Hospitality and Sustainable Design
                </h2>
            </hero-content>
        </section>
    )
}in