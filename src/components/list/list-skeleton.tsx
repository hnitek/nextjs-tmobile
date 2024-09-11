const ListItemSkeleton = () => {
  return (
    <div role="status" className="flex h-24 animate-pulse items-stretch overflow-hidden rounded-md border-2">
      <div className="w-20 bg-gray-300"></div>
      <div className="flex flex-1 flex-col px-6 py-4">
        <h3 className="h-6 w-1/2 rounded-full bg-gray-300"></h3>
        <p className="mt-3 flex h-4 w-1/3 rounded-full border-t bg-gray-300 text-gray-500"></p>
      </div>
    </div>
  );
};

const ListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 10 }, (_, i) => (
        <ListItemSkeleton key={i} />
      ))}
    </div>
  );
};

export default ListSkeleton;
