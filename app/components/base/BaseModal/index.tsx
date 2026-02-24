import { IconX } from '@/components/icons';
import { Modal } from 'antd';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import BaseButton, { BaseButtonProps } from '../BaseButton';
import './index.scss';

export type BaseModalFooterType = {
  onOk?: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
  onClose?: () => void;
};
export interface BaseModalProps {
  open?: boolean;
  title?: string | ReactNode;
  okText?: string;
  cancelText?: string;
  okButtonProps?: BaseButtonProps;
  bodyClassName?: string;
  loadingOk?: boolean;
  cancelButtonProps?: BaseButtonProps;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
  onClose?: () => void;
  closable?: boolean;
  onOk?: (e?: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  zIndex?: number;
  width?: number | string;
  footer?: (props: BaseModalFooterType) => ReactNode;
  maskClosable?: boolean;
  destroyOnHidden?: boolean;
}

/**
 * A reusable base modal component using Ant Design's Modal.
 *
 * @example
 * ```tsx
 * <BaseModal
 *   open={open}
 *   onCancel={handleCancel}
 *   onOk={handleOk}
 *   title="No content"
 *   cancelText="Cancel"
 *   okText="Save changes"
 * >
 *   <p>Some contents...</p>
 *   <p>Some contents...</p>
 *   <p>Some contents...</p>
 * </BaseModal>
 * ```
 */

function BaseModal(props: BaseModalProps) {
  const { t } = useTranslation();
  const {
    title = 'Base Modal',
    open,
    onCancel,
    onOk,
    cancelText = t('common.cancel'),
    okText = t('common.ok'),
    okButtonProps,
    loadingOk = false,
    cancelButtonProps,
    children,
    bodyClassName = '',
    footer,
    onClose,
    closable = true,
    ...remainProps
  } = props;

  return (
    <Modal
      title={
        <div
          className="flex items-center justify-between h-16 px-10 text-xl font-medium text-amber-50 box-border"
          style={{
            background: 'linear-gradient(270deg, #00BBD4 0%, #0F36DB 100%)',
          }}
        >
          <h2 className="text-xl font-medium">{title}</h2>
          {closable && (
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center p-1 rounded hover:bg-white/10 cursor-pointer transition-all duration-300 active:bg-white/30 -mr-2"
              aria-label="Close modal"
            >
              <IconX size={24} className="!text-2xl" />
            </button>
          )}
        </div>
      }
      className="BaseModal"
      closable={false}
      open={open}
      onCancel={onCancel}
      footer={
        footer ? (
          footer({ onCancel, onOk, onClose })
        ) : (
          <div className="flex items-center justify-end h-20 px-10 border-t border-solid border-iron-200 gap-2.5 box-border">
            <BaseButton
              type="default"
              {...cancelButtonProps}
              onClick={onCancel}
            >
              {cancelText}
            </BaseButton>
            <BaseButton
              type="fill"
              loading={loadingOk}
              {...okButtonProps}
              onClick={onOk}
            >
              {okText}
            </BaseButton>
          </div>
        )
      }
      {...remainProps}
    >
      <div className={`px-10 py-7 text-base ${bodyClassName}`}>{children}</div>
    </Modal>
  );
}

export default BaseModal;
