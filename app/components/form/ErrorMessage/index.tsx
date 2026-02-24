import clsx from 'clsx';

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={clsx(message ? 'text-ruby-red-600' : 'hidden')}>
      {message}
    </div>
  );
}
