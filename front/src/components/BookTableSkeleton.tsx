const BookTableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className="border-t animate-pulse">
       
          <td className="p-3">
            <div className="h-4 w-40 bg-gray-200 rounded" />
          </td>

     
          <td className="p-3">
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </td>

      
          <td className="p-3">
            <div className="h-4 w-36 bg-gray-200 rounded" />
          </td>

        
          <td className="p-3">
            <div className="flex gap-3">
              <div className="h-4 w-10 bg-gray-200 rounded" />
              <div className="h-4 w-10 bg-gray-200 rounded" />
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BookTableSkeleton;
