import { IconInfoLine } from '@/components/icons';
import { Tooltip } from 'antd';
import clsx from 'clsx';
import { ReactNode } from 'react';
import './index.scss';

interface InfoTooltipProps {
  className?: string;
  size?: number;
  content: ReactNode;
  color?: string;
}

function InfoTooltip(props: InfoTooltipProps) {
  const { className, size = 16, color, content } = props;

  return (
    <Tooltip title={content} className="InfoTooltip" color={color}>
      <IconInfoLine
        size={size}
        style={{
          height: size,
          width: size,
        }}
        className={clsx(
          'flex items-center justify-center !text-base cursor-pointer text-iron-700',
          className,
        )}
      />
    </Tooltip>
  );
}

export default InfoTooltip;
