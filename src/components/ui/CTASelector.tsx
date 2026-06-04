import React from 'react';

type Props = {
  variant: 'primary' | 'secondary';
  ctaText: string;
  onClick?: () => void;
  textColor?: string;
  bgColor: string;
};

const CTASelector = ({
  variant = 'primary',
  onClick,
  ctaText,
  textColor,
  bgColor,
}: Props) => {
  const baseStyle =
    'py-3 px-7 rounded-sm z-50 w-full max-w-50 font-light text-lg cursor-pointer block text-center';

  const variants = {
    primary:
      'bg-[var(--btn-color)] border border-[var(--btn-color)] hover:bg-transparent transition duration-300',
    secondary: `transition-all duration-300 hover:text-text-subtitle hover:underline hover:underline-offset-3 ${
      textColor ? 'text-[#2893F8]' : textColor
    }`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
      style={{ '--btn-color': bgColor } as React.CSSProperties}
    >
      {ctaText}
    </button>
  );
};

export default CTASelector;
