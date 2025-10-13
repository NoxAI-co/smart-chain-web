import { InfiniteSlider } from '@/components/ui/infinite-slider'
import Image from 'next/image'

export default function LogoCloud() {
    return (
        <section className="overflow-hidden pt-16 pb-8 w-full">
            <div className="group relative w-full max-w-full">
                <div className="flex">
                    <div className="relative py-6 w-full md:w-full max-w-6xl mx-auto rounded-xl bg-background/20 backdrop-blur-sm ring-1 ring-white/10 overflow-hidden">
                        <div
                            className="relative"
                            style={{
                                maskImage:
                                    'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                                WebkitMaskImage:
                                    'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                            }}
                        >
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <Image
                                    className="mx-auto w-fit dark:invert"
                                    src="/novaventa-logo.png"
                                    alt="Novaventa Logo"
                                    height={20}
                                    width={80}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto w-fit dark:invert"
                                    src="/camara-armenia.png"
                                    alt="Camara Armenia Logo"
                                    height={16}
                                    width={80}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto w-fit dark:invert"
                                    src="/camara-bogota.png"
                                    alt="Camara Bogota Logo"
                                    height={16}
                                    width={80}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-12 mt-6 w-fit invert dark:invert-0"
                                    src="/colombia-logo.webp"
                                    alt="Colombiana Logo"
                                    height={10}
                                    width={160}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto  w-fit dark:invert"
                                    src="/haceb-logo.png"
                                    alt="Haceb Logo"
                                    height={20}
                                    width={80}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto  w-fit dark:invert"
                                    src="/offcorss-logo.png"
                                    alt="Offcorss Logo"
                                    height={16}
                                    width={80}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto  w-fit dark:invert"
                                    src="/tcc-logo.png"
                                    alt="TCC Logo"
                                    height={28}
                                    width={80}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto w-fit dark:invert"
                                    src="/yamaha-logo.png"
                                    alt="Yamaha Logo"
                                    height={24}
                                    width={80}
                                />
                            </div>
                        </InfiniteSlider>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
