// CHỈ DÙNG scss hoặc TAILWIND! component này bọc toàn bộ app

import { FallbackProps, getErrorMessage } from 'react-error-boundary';

interface ErrorBoundaryFallbackProps extends FallbackProps {
  title?: string;
}

export default function ErrorBoundaryFallback({
  title,
  error,
  resetErrorBoundary,
}: ErrorBoundaryFallbackProps) {
  return (
    <div className="p-6 text-center">
      <div className="font-bold text-xl uppercase ">
        {title || 'Something went wrong !'}
      </div>
      <div className="my-4">
        <pre className="text-red-400 text-wrap text-left">
          {getErrorMessage(error)}
        </pre>
      </div>
      <button
        className="bg-blue-600 text-white px-8 py-2 rounded-lg cursor-pointer"
        onClick={resetErrorBoundary}
      >
        Retry
      </button>
    </div>
  );
}
