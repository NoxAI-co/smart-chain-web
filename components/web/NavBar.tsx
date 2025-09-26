"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { InteractiveButton } from "../ui/interactive-button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Inicio",
      href: "/",
      description: "",
    },
    {
      title: "Servicios",
      description:
        "Módulos de transformación adaptados a tu realidad organizacional",
      items: [
        {
          title: "Productividad desde el ser",
          section: "benefits",
        },
        {
          title: "Transformación digital empática",
          section: "process",
        },
        {
          title: "Logística consciente",
          section: "testimonials",
        },
        {
          title: "Eficiencia organizacional",
          section: "cta",
        },
      ],
    },
    {
      title: "Empresa",
      description:
        "Conoce nuestra filosofía human centric y modelo All You Can Learn",
      items: [
        {
          title: "Nuestro proceso",
          section: "process",
        },
        {
          title: "Lo que nos mueve",
          section: "benefits",
        },
        {
          title: "Testimonios",
          section: "testimonials",
        },
        {
          title: "Contacto",
          section: "cta",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/60 backdrop-blur-lg shadow-lg' 
        : 'bg-background shadow-xl'
    }`}>
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button
                          variant="ghost"
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          {item.title}
                        </Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <button
                              onClick={() => scrollToSection("cta")}
                              className="relative mt-10 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[oklch(0.70_0.18_248.5)] to-[oklch(0.60_0.20_268.5)] rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
                            >
                              <span className="relative z-10">
                                Agenda tu diagnóstico
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.75_0.22_248.5)] to-[oklch(0.65_0.25_268.5)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.55_0.15_248.5)] to-[oklch(0.50_0.18_268.5)] opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                            </button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <div
                                key={subItem.title}
                                onClick={() => scrollToSection(subItem.section)}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded cursor-pointer transition-colors"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src="/smart.png"
            alt="Smart Chain Solutions"
            width={60}
            height={60}
          />
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <Button
            variant="ghost"
            className="hidden md:inline"
            onClick={() => scrollToSection("cta")}
          >
            Diagnóstico gratuito
          </Button>


          <Button
            variant="outline"
            onClick={() => scrollToSection("testimonials")}
          >
            Casos de éxito
          </Button>
          <InteractiveButton
            className="hidden md:flex"
            onClick={() => scrollToSection("cta")}
            text="Empezar ahora"
          />
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute p-8 top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <div
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          setOpen(false);
                        }}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </div>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={() => {
                            scrollToSection(subItem.section);
                            setOpen(false);
                          }}
                          className="flex justify-between items-center cursor-pointer"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t flex justify-center">
                <InteractiveButton
                  text="Empezar ahora"
                  onClick={() => {
                    scrollToSection("cta");
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
