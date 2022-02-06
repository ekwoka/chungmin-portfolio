import { ChevronDoubleDownIcon } from '@heroicons/react/outline';

import heroImage from '../../static/images/uploads/AC-hotel_lobby.jpg'

export default function Hero() {
    return (
        <section class="relative flex flex-col items-center w-full">
            <img src={ heroImage } class="object-cover w-full min-h-screen opacity-80" alt="AC Hotel Main Lobby" />
            <hero-content class="absolute flex flex-col w-full px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-4">
                <h2 class="block text-3xl tracking-wider">
                    Senior Interior Designer with focus on Hospitality and Sustainable Design
                </h2>
            </hero-content>
            <ChevronDoubleDownIcon class="absolute w-8 h-8 mx-auto bottom-4 text-stone-700 hover:text-stone-900 transition-all hover:scale-110" />
        </section>
    )
}