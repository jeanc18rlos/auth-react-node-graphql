import { ArrowPathIcon } from "@heroicons/react/20/solid";

export const Loading = () => {
  return (
    <div className="m-auto relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
            <ArrowPathIcon className="h-6 w-6 text-blue-600 animate-spin" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Loading ...
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
