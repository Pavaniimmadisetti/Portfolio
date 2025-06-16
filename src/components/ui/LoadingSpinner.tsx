import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div 
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      role="alert" 
      aria-label="Loading content"
    >
      <motion.div
        className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
