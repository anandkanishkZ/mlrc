'use client';

import { motion } from 'framer-motion';
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="/logo.png"
          onLoadedData={() => setIsVideoLoaded(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/intro.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay - Simple dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-30 flex gap-3">
        <motion.button
          onClick={toggleVideo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? (
            <HiPause className="w-5 h-5" />
          ) : (
            <HiPlay className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>
        
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          {isMuted ? (
            <HiVolumeOff className="w-5 h-5" />
          ) : (
            <HiVolumeUp className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Main Content - Completely Minimal */}
      <div className="relative z-20 container-custom py-20">
        {/* Empty content area - just video background */}
      </div>
    </section>
  );
};

export default Hero;