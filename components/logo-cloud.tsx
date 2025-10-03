import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'

export default function LogoCloud() {
    return (
        <section className="overflow-hidden pt-16 pb-8 w-full">
            <div className="group relative w-full max-w-full">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Impulsado las mejores empresas</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
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

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
