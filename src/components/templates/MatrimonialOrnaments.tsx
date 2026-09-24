import React from 'react';

interface OrnamentProps {
  color?: string;
  className?: string;
  size?: number;
}

export const CornerOrnament: React.FC<OrnamentProps & { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  color = '#ca8a04',
  className = '',
  size = 40,
  position,
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M2 2 H28 C28 2 20 8 18 18 C8 20 2 28 2 28 V2 Z"
        fill={color}
        fillOpacity="0.12"
      />
      <path
        d="M2 2 H42 M2 2 V42"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 8 H28 M8 8 V28"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="3" fill={color} />
      <circle cx="34" cy="4" r="1.5" fill={color} />
      <circle cx="4" cy="34" r="1.5" fill={color} />
    </svg>
  );
};

export const DividerFlourish: React.FC<OrnamentProps> = ({
  color = '#ca8a04',
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-600/40 to-amber-600" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill={color}
          fillOpacity="0.85"
        />
        <circle cx="12" cy="12" r="2" fill="#ffffff" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-amber-600/40 to-amber-600" />
    </div>
  );
};

export const IslamicStarCorner: React.FC<OrnamentProps & { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  color = '#065f46',
  className = '',
  size = 36,
  position,
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M2 2 H34 M2 2 V34" stroke={color} strokeWidth="2" />
      <path d="M6 6 H22 M6 6 V22" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
      {/* 8-point Islamic star icon */}
      <rect x="10" y="10" width="8" height="8" transform="rotate(45 14 14)" fill={color} fillOpacity="0.7" />
      <rect x="10" y="10" width="8" height="8" fill={color} fillOpacity="0.7" />
    </svg>
  );
};

export const HinduCornerOrnament: React.FC<OrnamentProps & { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  color = '#9f1239',
  className = '',
  size = 44,
  position,
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Outer traditional curved border with vermilion accent */}
      <path d="M2 2 H42 M2 2 V42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M7 7 H28 M7 7 V28" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
      {/* Sacred lotus petal motif */}
      <path
        d="M6 6 C16 12 18 22 28 28 C22 18 12 16 6 6 Z"
        fill={color}
        fillOpacity="0.25"
      />
      <circle cx="16" cy="16" r="3.5" fill={color} fillOpacity="0.85" />
      <circle cx="34" cy="5" r="2" fill={color} />
      <circle cx="5" cy="34" r="2" fill={color} />
      <circle cx="24" cy="24" r="1.5" fill={color} />
    </svg>
  );
};

export const MangalKalashIcon: React.FC<OrnamentProps> = ({
  color = '#ca8a04',
  className = '',
  size = 32,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Coconut atop Kalash */}
      <circle cx="16" cy="7" r="4" fill={color} fillOpacity="0.9" />
      {/* Mango leaves protruding left & right */}
      <path d="M12 9 C8 7 6 4 7 2 C10 4 12 7 13 9" fill="#15803d" />
      <path d="M20 9 C24 7 26 4 25 2 C22 4 20 7 19 9" fill="#15803d" />
      <path d="M16 6 C15 3 16 1 16 1 C17 3 17 6 16 6" fill="#15803d" />
      {/* Kalash Neck */}
      <path d="M11 11 H21 V13 H11 Z" fill={color} />
      {/* Kalash Pot (Ghat) */}
      <path
        d="M10 13 C8 15 7 19 9 23 C11 27 21 27 23 23 C25 19 24 15 22 13 Z"
        fill={color}
        fillOpacity="0.85"
      />
      {/* Base of Kalash */}
      <path d="M12 26 H20 V28 H12 Z" fill={color} />
      {/* Sacred Swastika / Auspicious dot in center of pot */}
      <circle cx="16" cy="19" r="2" fill="#9f1239" />
    </svg>
  );
};

export const OmFlourish: React.FC<OrnamentProps> = ({
  color = '#ca8a04',
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-rose-700/50 to-amber-600" />
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-amber-400/40 text-rose-900 shadow-xs font-serif">
        <span className="text-base font-bold text-rose-900 leading-none">ॐ</span>
        <span className="text-xs font-semibold text-amber-800 tracking-wider">শ্রী শ্রী প্রজাপতয়ে নমঃ</span>
        <span className="text-base font-bold text-rose-900 leading-none">ॐ</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-rose-700/50 to-amber-600" />
    </div>
  );
};
