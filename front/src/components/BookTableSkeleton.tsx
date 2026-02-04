interface Props {
  count?: number;
}
const BookTableSkeleton = ({ count = 8 }: Props) => {
  return (
    <div
      className="
        grid gap-5
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="
            rounded-lg
            border border-green-200
            bg-white
            p-4
            shadow-sm
            animate-pulse
            flex flex-col justify-between
          "
        >
          {/* Title */}
          <div className="h-5 w-3/4 bg-gray-200 rounded mb-3" />

          {/* Author */}
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />

          {/* Publisher */}
          <div className="h-4 w-2/3 bg-gray-200 rounded" />

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <div className="h-4 w-10 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookTableSkeleton;
