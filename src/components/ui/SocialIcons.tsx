import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const MeetupIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19.16 11.23c-.15-.09-.35-.09-.5 0l-.83.47c-.24.14-.54.06-.68-.18-.55-.91-1.39-1.57-2.39-1.89l-.26-.08c-.26-.08-.41-.36-.33-.62l.26-.84c.07-.24-.05-.51-.29-.62-2.12-.99-4.57-.69-6.42.75l-.22.17c-.21.16-.51.13-.68-.08l-.58-.69c-.18-.21-.49-.24-.71-.07-.48.37-.91.82-1.28 1.32l-.08.11c-.16.22-.11.53.11.69l.66.5c.21.16.26.47.11.69-.51.75-.82 1.62-.89 2.54V13c-.02.28-.23.51-.51.52l-.96.04c-.28.01-.51.24-.51.52 0 .5.05.99.14 1.48l.05.25c.06.27.29.47.57.47l.95-.01c.28 0 .51.21.53.49.07.97.39 1.9.93 2.7l.08.12c.16.22.46.28.69.14l.82-.49c.24-.14.54-.07.69.17.6 1.01 1.54 1.76 2.65 2.14l.26.09c.27.09.42.38.33.65l-.25.84c-.08.26.06.55.32.65 1.09.43 2.26.54 3.42.33l.28-.05c.27-.05.47-.28.47-.56l.01-.96c0-.28.21-.51.49-.53.94-.07 1.84-.37 2.62-.89l.11-.08c.22-.15.53-.1.69.11l.58.68c.18.21.49.25.71.08 1.41-1.07 2.4-2.58 2.78-4.26l.05-.24c.06-.27-.08-.54-.34-.64l-.88-.33c-.26-.1-.39-.39-.3-.65.29-.83.43-1.7.43-2.59v-.11c0-.28.21-.51.49-.53l.96-.06c.28-.02.51-.25.5-.53-.08-1.22-.44-2.39-1.07-3.42l-.09-.13c-.15-.24-.46-.31-.7-.17l-.82.49c-.24.14-.55.07-.69-.17-.4-.68-.96-1.24-1.63-1.66zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);

