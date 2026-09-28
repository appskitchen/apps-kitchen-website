'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 3.2 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    // Animate elements with CSS
    const dots = document.querySelectorAll('.preloader-dot');
    const logo = document.querySelector('.preloader-logo');
    const progress = document.querySelector('.progress-bar');
    const text = document.querySelector('.preloader-text');

    // Add animation classes
    dots.forEach((dot, i) => {
      setTimeout(() => {
        dot.classList.add('animate-dot');
      }, i * 100);
    });

    if (logo) {
      setTimeout(() => {
        logo.classList.add('animate-logo');
      }, 300);
    }

    if (progress) {
      setTimeout(() => {
        progress.classList.add('animate-progress');
      }, 500);
    }

    if (text) {
      setTimeout(() => {
        text.classList.add('animate-text');
      }, 800);
    }

    return () => {
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="preloader-dot absolute w-2 h-2 bg-blue-500 rounded-full" style={{ left: '20%', top: '30%' }}></div>
          <div className="preloader-dot absolute w-2 h-2 bg-purple-500 rounded-full" style={{ left: '80%', top: '20%' }}></div>
          <div className="preloader-dot absolute w-2 h-2 bg-cyan-500 rounded-full" style={{ left: '70%', top: '80%' }}></div>
          <div className="preloader-dot absolute w-2 h-2 bg-pink-500 rounded-full" style={{ left: '15%', top: '70%' }}></div>
        </div>

        {/* Logo section */}
        <div className="flex flex-col items-center justify-center relative z-10">
          <div className="preloader-logo mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
              AK
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mb-8">
            <div className="progress-bar h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full" style={{ width: '0%' }}></div>
          </div>

          {/* Loading text */}
          <p className="preloader-text text-gray-300 text-sm font-medium tracking-widest">LOADING</p>
        </div>
      </div>

      <style>{`
        @keyframes dot-scale {
          0% {
            transform: scale(0.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes logo-rotate {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes progress-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes text-fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .preloader-dot.animate-dot {
          animation: dot-scale 0.6s ease-out forwards;
        }

        .preloader-logo.animate-logo {
          animation: logo-rotate 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .progress-bar.animate-progress {
          animation: progress-fill 2s ease-in-out forwards;
        }

        .preloader-text.animate-text {
          animation: text-fade 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}