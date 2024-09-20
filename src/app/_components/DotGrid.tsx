const DotGrid = () => (
    <div className="transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[...Array(8)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {[...Array(6)].map((_, colIndex) => (
            <div key={colIndex} className="w-2 h-2 bg-white rounded-full opacity-20 m-4" />
          ))}
        </div>
      ))}
    </div>
  );

export default DotGrid;