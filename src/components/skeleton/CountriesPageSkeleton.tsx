import { CardSkeleton } from "./CardSkeleton"; 

const CountriesPageSkeleton = () => {
  return (
    <div>
      {/* Skeleton filter bar */}
      <div className="mb-12 flex justify-between gap-4">
        <div className="max-w-80 w-full h-14 bg-gray-300 rounded-md animate-pulse" />
        <div className="max-w-64 w-full h-14 bg-gray-300 rounded-md animate-pulse" />
      </div>

      {/* Skeleton country list */}
      <div className="grid grid-cols-4 gap-16 gap-y-16">
        {Array.from({ length: 12 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>

      {/* Skeleton pagination */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <div className="w-20 h-10 bg-gray-300 rounded-full animate-pulse" />
        <div className="w-32 h-6 bg-gray-300 animate-pulse" />
        <div className="w-20 h-10 bg-gray-300 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default CountriesPageSkeleton;
