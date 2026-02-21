'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function DevelopmentWarning() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWarning = sessionStorage.getItem('devWarningShown');
    if (!hasSeenWarning) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('devWarningShown', 'true');
    setIsOpen(false);
  };

  const handleGoToPortfolio = () => {
    handleClose();
    window.location.href = 'https://drive.google.com/drive/folders/11-dcScAtWQ-Z3rUCUBnsYQ4hjWA7dhL9?usp=drive_link';
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <AlertDialogContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' }}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>Under Development</AlertDialogTitle>
            <AlertDialogDescription>
              This website is currently in the development phase.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
        >
          <AlertDialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Continue to website
            </Button>
            <Button onClick={handleGoToPortfolio}>
              Directly view portfolio
            </Button>
          </AlertDialogFooter>
        </motion.div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
