import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Link from "next/link";

export function OrderBox() {
    const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpItem = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleSlide = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Imagen */}
      <img
        src="/img/cajaPizza.webp"
        alt="Jimmy's Pizza Box"
        className="w-full h-auto select-none"
      />

      {/* ------- Overlay ESCRITORIO / TABLET (md+) ------- */}
        <div
        className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2
            top-[30%] lg:top-[28%]
            w-[88%] max-w-2xl
            flex-col items-center
        "
        >
        <motion.h2
            className="text-white font-bold uppercase tracking-wide text-[clamp(20px,2.6vw,40px)] mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
        >
            ¿Cómo Ordenar?
        </motion.h2>

        <div className="grid grid-cols-3 gap-8 w-full">
            {[
            {
                n: '1',
                t1: 'Explora el',
                t2: 'Menú',
                p: 'Navega por nuestras categorías y descubre todos los platillos.',
            },
            {
                n: '2',
                t1: 'Agrega al',
                t2: 'Carrito',
                p: 'Selecciona tus productos favoritos y agrégalos al carrito.',
            },
            {
                n: '3',
                t1: 'Envía por',
                t2: 'WhatsApp',
                p: 'Revisa tu pedido y envíalo directo por WhatsApp.',
                cta: true,
            },
            ].map((s, i) => (
            <motion.div
                key={s.n}
                className="flex flex-col items-center text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
            >
                <motion.div
                className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center mb-3"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 + i * 0.15 }}
                viewport={{ once: true }}
                >
                <span className="text-white font-bold text-2xl">{s.n}</span>
                </motion.div>

                <motion.h3
                className="text-white font-bold uppercase mb-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
                viewport={{ once: true }}
                >
                {s.t1} {s.t2 && <><br />{s.t2}</>}
                </motion.h3>

                <motion.p
                className="text-white text-sm leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 + i * 0.15 }}
                viewport={{ once: true }}
                >
                {s.p}
                </motion.p>

                {s.cta && (
                <motion.div
                className="mt-5"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                >
                <Link
                    href="#menu"
                    className="w-full px-8 h-11 text-white bg-orange-500 hover:bg-orange-600 font-bold uppercase inline-flex items-center justify-center rounded-md"
                >
                    Menú
                </Link>
                </motion.div>
                )}
            </motion.div>
            ))}
        </div>
        </div>

        {/* ------- Layout MÓVIL (por defecto) ------- */}
        <div className="md:hidden w-full px-4 -mt-10 mb-4">
        <motion.h2
            className="text-white text-center font-extrabold uppercase tracking-wide text-[clamp(18px,6vw,26px)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] mb-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
        >
            ¿Cómo Ordenar?
        </motion.h2>

        <div className="mt-6 space-y-4">
            {[
            {
                n: '1',
                title: 'Explora el menú',
                text: 'Navega por nuestras categorías y descubre todos los platillos.',
            },
            {
                n: '2',
                title: 'Agrega al carrito',
                text: 'Selecciona tus productos favoritos y agrégalos al carrito.',
            },
            {
                n: '3',
                title: 'Envía por WhatsApp',
                text: 'Revisa tu pedido y envíalo directo por WhatsApp.',
            },
            ].map((s, i) => (
            <motion.div
                key={s.n}
                className="rounded-2xl bg-white/85 backdrop-blur px-4 py-4 shadow-md flex gap-3 items-start"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
            >
                <motion.div
                className="shrink-0 w-9 h-9 rounded-full border-2 border-black/60 flex items-center justify-center font-bold"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 + i * 0.15 }}
                viewport={{ once: true }}
                >
                {s.n}
                </motion.div>

                <div>
                <motion.h3
                    className="font-bold uppercase text-[clamp(13px,3.8vw,16px)] leading-tight"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
                    viewport={{ once: true }}
                >
                    {s.title}
                </motion.h3>

                <motion.p
                    className="text-[clamp(12px,3.6vw,14px)] leading-snug text-black/80 mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 + i * 0.15 }}
                    viewport={{ once: true }}
                >
                    {s.text}
                </motion.p>
                </div>
            </motion.div>
            ))}
        </div>

        <motion.div
        className="mt-5"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
        >
        <Link
            href="#menu"
            className="w-full h-11 text-white bg-orange-500 hover:bg-orange-600 font-bold uppercase inline-flex items-center justify-center rounded-md"
        >
            Menú
        </Link>
        </motion.div>
        </div>

    </div>
  )
}
