import {
    ShieldCheckIcon,
    SquaresPlusIcon,
    CalendarDaysIcon,
    MagnifyingGlassPlusIcon,
    UsersIcon,
    IdentificationIcon
} from '@heroicons/react/24/solid';

export default function FeaturesSection() {
    const features = [
        {
            title: "Smart Event Scheduling",
            desc: "Centralize your tournament logistics. Use our intuitive calendar and scheduling tools to automatically set match timings across all time zones and notify participants instantly.",
            icon: CalendarDaysIcon
        },
        {
            title: "Browse Open Rosters",
            desc: "Instantly filter and view teams with active vacancies. Compare skill levels, match goals, and apply directly for the slot that fits you best.",
            icon: MagnifyingGlassPlusIcon,
        },
        {
            title: "Scout Free Agents",
            desc: "Find your next star player. Dive into detailed stats and filter a pool of verified free agents by roles, availability, and specific in-game metrics.",
            icon: UsersIcon,
        },
        {
            title: "Pro-Ready Portfolios",
            desc: "Showcase your skills with a live-syncing dashboard. Attach highlights and get noticed by pro organizations.",
            icon: IdentificationIcon,
        },
        {
            title: "Fair Play Guard",
            desc: "Compete with confidence. Our multi-layered reputation system filters out toxic players and cheaters automatically.",
            icon: ShieldCheckIcon,
        },

        {
            title: "Tournament Architect",
            desc: "Build any competition format in seconds. From Single Elimination to Swiss-style, we handle complex brackets.",
            icon: SquaresPlusIcon,
        },
    ];

    return (
        <section className="py-20 flex flex-col items-center">

            <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                Team Forge Features
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative bg-gradient-to-br from-gray-200 via-gray-400 to-gray-300 p-[1px] rounded-2xl overflow-hidden shadow-xl"
                    >

                        <div className="bg-zinc-900 h-full p-8 rounded-2xl flex flex-col transition-all duration-300 group-hover:bg-zinc-800/50">
                            <div className="mb-4 p-3 w-fit rounded-lg bg-zinc-800 shadow-inner border border-gray-500/30">
                                <feature.icon className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>


                            <div className="mt-auto pt-6">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
