'use client';
import { useRef, useEffect, forwardRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { cn } from '../lib/utils';

interface MarqueeProps {
  children: string;
  baseVelocity?: number;
  clasname?: string;
  scrollDependent?: boolean;
  delay?: number;
}

const MarqueeText = forwardRef<HTMLDivElement, MarqueeProps>(({
  children,
  baseVelocity = -5,
  clasname,
  scrollDependent = false,
  delay = 0,
}, ref) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v: number) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t: number, delta: number) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap gap-10 flex-nowrap"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className={cn(
            'block text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[100px]',
            clasname
          )}>

            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
});

MarqueeText.displayName = 'MarqueeText';

export default MarqueeText;


// USO

// import MarqueeText from '@/components/Marquee/Marquee';

{/* <div className="bg-black text-white py-20 space-y-5">
  <MarqueeText baseVelocity={-3} clasname="text-red-500 uppercase">
    Fullstack Developer • React • Laravel • Tailwind •
  </MarqueeText>
  <MarqueeText baseVelocity={3} clasname="text-blue-500 uppercase">
    Portafolio de presentación • Junior Developer • Colombia •
  </MarqueeText>
</div> */}
