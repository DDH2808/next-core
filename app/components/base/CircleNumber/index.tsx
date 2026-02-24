import clsx from 'clsx';

export type TCircleNumberType = 'fill' | 'default' | 'outline';
export type ICircleNumberSize = 'normal' | 'large';
interface CircleNumberProps {
  number: number;
  type?: TCircleNumberType;
  className?: string;
  size?: ICircleNumberSize;
}

function CircleNumber(props: CircleNumberProps) {
  const { number, className, type = 'fill', size = 'normal' } = props;

  const baseClassName = [
    'CircleNumber inline-flex grow-0 shrink-0 justify-center items-center font-medium text-center border rounded-full',
  ];

  switch (size) {
    case 'large':
      baseClassName.push('min-w-6 h-6 text-base px-1.5');
      break;
    case 'normal':
    default:
      baseClassName.push('min-w-5 h-5 text-sm px-1');
      break;
  }

  switch (type) {
    case 'default':
      baseClassName.push('text-shade-0 bg-iron-500 border-iron-500');
      break;
    case 'outline':
      baseClassName.push('text-iron-700 bg-shade-0 border-iron-600');
      break;
    case 'fill':
    default:
      baseClassName.push('text-shade-0 bg-blue-main-700 border-blue-main-700');
      break;
  }

  return (
    <span className={clsx(...baseClassName, className)}>
      <span
        className={clsx(
          'text-inherit text-[length:inherit]',
          -10 < number && number < 10 && '-ml-[1px]',
        )}
      >
        {number}
      </span>
    </span>
  );
}

export default CircleNumber;
