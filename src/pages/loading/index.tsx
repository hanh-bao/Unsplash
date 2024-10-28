export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export const NoLoading = () => {
  return (
    <div className="flex justify-center items-center h-full font-semibold">
      <span role="status">Nothing more to load</span>
    </div>
  );
};
