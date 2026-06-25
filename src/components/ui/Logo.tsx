import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 24, 
  glow = true,
  ...props 
}) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Ambient backing glow — intensifies on hover */}
      {glow && (
        <div className="absolute inset-0 bg-[#a855f7]/10 rounded-full blur-[6px] pointer-events-none scale-125 animate-pulse group-hover:bg-[#a855f7]/25 group-hover:blur-[10px] transition-all duration-300" />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 text-[#a855f7] transition-all duration-300"
        style={{ filter: 'drop-shadow(0 0 0px #a855f7)' }}
        onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 4px rgba(168,85,247,0.6))')}
        onMouseLeave={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 0px #a855f7)')}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={`
            M20,0 H80 V20 H100 V80 H80 V100 H20 V80 H0 V20 H20 Z
            M35,35 H65 V65 H35 Z
            M30,0 H42 V20 H30 Z
            M58,0 H70 V20 H58 Z
            M30,80 H42 V100 H30 Z
            M58,80 H70 V100 H58 Z
            M0,30 H20 V42 H0 Z
            M0,58 H20 V70 H0 Z
            M80,30 H100 V42 H80 Z
            M80,58 H100 V70 H80 Z
          `}
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
