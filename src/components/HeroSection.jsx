import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40">
      <div className="h-[380px] md:h-[460px] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-end p-6 md:p-8"
      >
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            AI-Enabled CRM with Automated Voice Agent
          </h1>
          <p className="mt-2 text-neutral-300">
            Manage leads, orchestrate campaigns, and let AI handle calls. Real-time
            analytics, delightful UI, and powerful workflows—optimized for dark mode.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
