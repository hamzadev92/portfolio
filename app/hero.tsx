"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero, portrait, profile } from "./data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero relative isolate min-h-screen overflow-hidden text-white"
    >
      {/* Portrait blended in behind the text. If portrait is null in data.ts, only the gradient shows. */}
      {portrait && (
        <div className="absolute inset-0 -z-10">
          {/*
            ZOOM: change 0.85 in md:scale-[0.85] on the next line.
            1 = photo fills the hero, 0.85 = a little zoomed out, 0.7 = a lot zoomed out.
            The mask fades the photo's left and right edges into the red background.
            The zoom only applies on tablets and larger (md and up).
          */}
          <div className="absolute inset-0 md:origin-[137%_45%] md:scale-[0.79] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <Image
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="100vw"
              priority
              // Your face sits at about 47% across and 40% down. Change the numbers in object-[47%_45%] to move the photo.
              className="object-cover object-[47%_45%] grayscale contrast-125"
            />
            {/* orange tint, only over the photo */}
            {/* <div className="absolute inset-0 bg-orange-600 mix-blend-multiply" /> */}
          </div>
          {/* dark fade at the bottom so the white text stays readable */}
          <div className="absolute inset-0 bg-linear-to-t from-[#4A0703] via-[#4A0703]/60 to-transparent" />
        </div>
      )}

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-lg font-medium"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="font-display max-w-3xl text-6xl leading-[0.98] font-extrabold tracking-tight md:text-8xl lg:text-[104px]"
            >
              {hero.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-4 font-bold text-neutral-950 transition hover:opacity-80"
              >
                See my work
              </a>
              <a
                href="https://github.com/hamzadev92"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-7 py-3.5 font-bold transition hover:bg-white/10"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xs text-lg leading-relaxed font-medium"
          >
            {hero.intro}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
