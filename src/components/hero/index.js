import heroImage from '../../static/images/uploads/AC-hotel_lobby.jpg'

export default function Hero() {
    return (
        <section class="relative w-full">
            <img src={ heroImage } class="object-cover w-full min-h-screen opacity-80" alt="AC Hotel Main Lobby" />
            <hero-content class="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-4">
                <h2 class="block text-3xl tracking-wider">
                    Senior Interior Designer with focus on Hospitality and Sustainable Design
                </h2>
            </hero-content>
        </section>
    )
}