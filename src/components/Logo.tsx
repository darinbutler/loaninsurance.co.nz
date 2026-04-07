import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  const textColorShield = isWhite ? 'text-white' : 'text-slate-900';
  const textColorAccent = isWhite ? 'text-teal-300' : 'text-teal-500';

  return (
    <div className={`flex items-center gap-3 ${isCompact ? 'gap-2' : ''}`}>
      {/* Shield Icon with Gradient */}
      <svg
        className={`${isCompact ? 'w-6 h-6' : 'w-8 h-8'} flex-shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <path
          d="M12 1L3 5V11C3 16.55 7.84 21.74 12 23C16.16 21.74 21 16.55 21 11V5L12 1Z"
          fill="url(#shieldGradient)"
        />
        <path
          d="M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
          fill={isWhite ? '#ffffff' : '#ffffff'}
        />
      </svg>

      {/* Logo Text */}
      {!isCompact && (
        <div className={`flex flex-col ${isCompact ? 'gap-0' : 'gap-0.5'}`}>
          <span className={`font-bold ${isCompact ? 'text-xs' : 'text-lg lg:text-base'} ${textColorShield} leading-none`}>
            LOANINSURANCE
          </span>
          <span className={`${isCompact ? 'text-xs' : 'text-sm'} ${textColorAccent} font-semibold leading-none`}>
            .co.nz
          </span>
        </div>
      )}

      {/* Compact text variant */}
      {isCompact && (
        <span className={`font-bold text-sm ${textColorShield}`}>
          LI<span className={textColorAccent}>.nz</span>
        </span>
      )}
    </div>
  );
}
