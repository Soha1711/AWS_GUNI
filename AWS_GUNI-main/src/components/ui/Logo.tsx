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
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Optional ambient backing glow */}
      {glow && (
        <div className="absolute inset-0 bg-[#c084fc]/15 rounded-full blur-[8px] pointer-events-none scale-120 animate-pulse" />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 text-[#c084fc] hover:text-white transition-colors duration-300"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6,6 h12 v12 H6 V6 z M9,9 v6 h6 V9 H9 z 
             M7,2 h2 v4 H7 V2 z M11,2 h2 v4 h-2 V2 z M15,2 h2 v4 h-2 V2 z 
             M7,18 h2 v4 H7 v-4 z M11,18 h2 v4 h-2 v-4 z M15,18 h2 v4 h-2 v-4 z 
             M2,7 h4 v2 H2 V7 z M2,11 h4 v2 H2 v-2 z M2,15 h4 v2 H2 v-2 z 
             M18,7 h4 v2 h-4 V7 z M18,11 h4 v2 h-4 v-2 z M18,15 h4 v2 h-4 v-2 z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
