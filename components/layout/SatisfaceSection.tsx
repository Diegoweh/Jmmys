import { motion } from "framer-motion";

export default function SatisfaceSection() {
  return (
    <section className="bg-cream py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-2 sm:mb-3">
          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange tracking-tight cubano"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            SATISFACE
          </motion.h3>
        </div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-700 cubano"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          tu antojo más grande
        </motion.p>

        <motion.button
          className="bg-orange text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-orange-dark transition shadow-md text-sm sm:text-base cubano"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          VER MENÚ
        </motion.button>

        {/* Collage - Responsive Container */}
        <div className="relative mt-8 sm:mt-12 md:mt-14 lg:mt-16">
          {/* Canvas wrapper with responsive heights */}
          <div className="relative mx-auto max-w-6xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            
            {/* Big left card - Person eating burger */}
            <ImageCard
            src="/img/meals/food.webp"
            alt="Persona disfrutando una hamburguesa"
            className="
                left-0
                top-16 sm:top-12 md:top-16 lg:top-20
                w-[50%] sm:w-[55%] md:w-[45%] lg:w-[40%]
                rotate-[-2deg]
                z-10
            "
            delay={0.15}
            />

            {/* Top middle burger close-up */}
            <ImageCard
              src="/img/meals/food2.webp"
              alt="Close-up burger"
              className="
                left-[28%] sm:left-[30%] md:left-[32%] lg:left-[34%]
                top-0 
                w-[45%] sm:w-[50%] md:w-[40%] lg:w-[35%]
                z-20
                rotate-[1deg]
              "
              delay={0.25}
            />

            {/* Sauces circle (small round) */}
            <RoundCard
              src="/img/meals/food7.webp"
              alt="Salsas"
              className="
                left-[44%] sm:left-[50%] md:left-[48%] lg:left-[47%]
                top-[22%] sm:top-[28%] md:top-[32%] lg:top-[35%]
                w-24 sm:w-20 md:w-36 lg:w-40
                z-30
              "
              delay={0.3}
            />

            {/* Ribs right */}
            <ImageCard
            src="/img/meals/food3.webp"
            alt="Costillas con salsa"
            className="
                right-0 sm:right-2 md:right-4 lg:right-6
                top-20 sm:top-16 md:top-24 lg:top-28
                w-[48%] sm:w-[50%] md:w-[42%] lg:w-[38%]
                rotate-[2deg]
                z-15
            "
            delay={0.2}
            />

            {/* Wings sticker - floating */}
            <FloatingSticker
              src="/img/meals/food8.webp"
              alt="Alitas"
              className="
                right-1 sm:right-4 md:right-8 lg:right-10
                top-0 sm:-top-2 md:-top-6
                w-24 sm:w-20 md:w-36 lg:w-40
                z-40
              "
              delay={0.35}
            />
            
            {/* Bottom sauce pour + fries */}
            <ImageCard
            src="/img/meals/food5.webp"
            alt="Salsa sobre papas"
            className="
                left-[18%] sm:left-[18%] md:left-[20%] lg:left-[22%]
                bottom-8 sm:bottom-8 md:bottom-0
                w-[60%] sm:w-[55%] md:w-[45%] lg:w-[40%]
                rotate-[1.5deg]
                z-25
            "
            delay={0.28}
            />

            {/* Logo badge (the orange J image) */}
            <motion.div
              className="
                absolute 
                left-1 sm:left-4 md:left-8 lg:left-10
                bottom-2 sm:bottom-4 md:bottom-8
                z-40
              "
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.35 }}
              viewport={{ once: true }}
            >
              <img
                src="/img/meals/J.png"
                alt="Logo J"
                className="w-20 sm:w-18 md:w-24 lg:w-28 object-contain drop-shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Pieces --- */
function ImageCard({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`
        absolute 
        rounded-lg sm:rounded-xl md:rounded-2xl 
        overflow-hidden 
        shadow-md sm:shadow-lg md:shadow-xl 
        bg-gray-200 
        aspect-[4/3] sm:aspect-[4/3]
        ${className ?? ""}
      `}
      initial={{ y: 30, opacity: 0, rotate: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.02, rotate: 0.5 }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}

function RoundCard({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`
        absolute 
        overflow-hidden 
        
        aspect-square 
        
        ${className ?? ""}
      `}
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.06 }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}

function FloatingSticker({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className ?? ""}`}
      initial={{ y: -15, opacity: 0, rotate: -8 }}
      whileInView={{ y: 0, opacity: 1, rotate: -4 }}
      viewport={{ once: true, amount: 0.1 }}
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        y: {
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.7, ease: "easeOut", delay },
        rotate: { duration: 0.7, ease: "easeOut", delay },
      }}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}