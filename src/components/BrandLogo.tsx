import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg sm:text-xl tracking-[0.22em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.25em]',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[10px] tracking-[0.4em]',
    lg: 'text-xs tracking-[0.45em]',
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Luxury Geometric Monogram Mark (Architectural interlocking DF) */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 rounded-sm bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/70 border border-slate-700/60 shadow-[0_0_20px_rgba(59,130,246,0.15)] group`}
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[72%] h-[72%] text-slate-100 transition-transform duration-500 group-hover:scale-105"
        >
          {/* Subtle outer architectural grid */}
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            stroke="url(#df_gold_grad)"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          {/* Interlocking 'D' and 'F' spatial lines */}
          <path
            d="M11 10H23C27.4183 10 31 13.5817 31 18C31 22.4183 27.4183 26 23 26H11V10Z"
            stroke="url(#df_glow_grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 19H33M17 26H28M17 13V34"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="df_gold_grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="0.5" stopColor="#A855F7" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
            <linearGradient id="df_glow_grad" x1="11" y1="10" x2="31" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute -inset-0.5 bg-blue-500/10 rounded-sm blur-xs -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className={`font-display font-bold text-white uppercase leading-none ${titleSizes[size]}`}>
          Dahuja
        </span>
        {showTagline && (
          <span className={`font-sans font-medium text-slate-400 uppercase mt-1 leading-none ${subSizes[size]}`}>
            Furnishers
          </span>
        )}
      </div>
    </div>
  );
};
