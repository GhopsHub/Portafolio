import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

export default function BoxAnimada() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        start: 'top top',
        end: '+=500',
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: 'power1.inOut'
        }
      }
    });

    tl.addLabel('start')
      .from('.box-text', { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .addLabel('color')
      .from('.box', { backgroundColor: '#28a92b' })
      .addLabel('spin')
      .to('.box', { rotation: 360 })
      .addLabel('end');
  }, []);

  return (
    <div ref={container} className="h-[100vh] flex items-center justify-center">
      <div className="box w-32 h-32 bg-red-500 flex items-center justify-center">
        <p className="box-text text-white font-bold">Hola</p>
      </div>
    </div>
  );
}
