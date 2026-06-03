'use client';

type Props = {
  varient: 'primary' | 'secondary';
  ctaText: string;
  onClick?: () => void;
  textColor?: string;
  bgColor: string;
  scrollToTop?: boolean;
};

const CTASelector = ({
  varient = 'primary',
  onClick,
  ctaText,
  textColor,
  bgColor,
}: Props) => {
  const baseStyle = 'transition duration-300 rounded-sm z-50 w-full min-w-5';

  const varients = {
    primary: `px-[28px] py-2 hover:bg-[#FEC55D]/70 transition`,
    secondary: `border border-[0.5px] py-[12px] px-[30px] text-lg hover:bg-[#E2F7ED] hover:text-[#1A5D3A] hover:border-transparent transition ${
      textColor ? textColor : 'text-white'
    }`,
  };
  const handleClick = () => {
    onClick?.();
  };
  return (
    <button
      className={`${baseStyle} ${varients[varient]}`}
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {ctaText}
    </button>
  );
};

export default CTASelector;
