import clsx from 'clsx';

export type StatusColorType =
  | 'iron'
  | 'mint'
  | 'blue'
  | 'yellow'
  | 'violet'
  | 'ruby';
interface StatusProps {
  className?: string;
  color?: StatusColorType;
  label: string;
}

function Status(props: StatusProps) {
  const { className, color = 'iron', label } = props;

  const baseClassName = [
    'inline-flex px-2.5 py-2 rounded-[5px] text-base leading-4 select-none w-fit h-fit',
  ];

  switch (color) {
    case 'mint':
      baseClassName.push('bg-mint-100 text-mint-700');
      break;
    case 'blue':
      baseClassName.push('bg-blue-main-100 text-blue-main-600');
      break;
    case 'yellow':
      baseClassName.push('bg-[#FFF6C4] text-[#D0B106]');
      break;
    case 'violet':
      baseClassName.push('bg-violet-50 text-violet-500');
      break;
    case 'ruby':
      baseClassName.push('bg-ruby-red-50 text-ruby-red-500');
      break;
    case 'iron':
    default:
      baseClassName.push('bg-iron-200 text-iron-500');
      break;
  }

  return <span className={clsx(...baseClassName, className)}>{label}</span>;
}

export default Status;
