'use client';

import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  { name: 'Ocean Render', videoUrl: 'https://drive.google.com/file/d/11POtYbAOTh73WKcX4izQ85cOdNCGkXN_/preview' },
  { name: 'Project 2' },
  { name: 'Project 3' },
  { name: 'Project 4' },
  { name: 'Project 5' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

export function AnimatedProjectList() {
  return (
    <motion.ul
      className="w-full max-w-md space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.li
          key={project.name}
          variants={itemVariants}
        >
          {project.videoUrl ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-card/50 border border-border p-6 rounded-lg text-left text-xl font-semibold text-foreground shadow-md cursor-pointer hover:bg-card/70 transition-colors">
                  {project.name}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-auto p-0 border-0 overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="sr-only">{project.name}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                  <iframe
                    src={project.videoUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <div className="bg-card/50 border border-border p-6 rounded-lg text-left text-xl font-semibold text-foreground shadow-md">
              {project.name}
            </div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
