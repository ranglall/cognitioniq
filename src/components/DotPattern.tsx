const DotPattern = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' }) => {
  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8'
  };

  // Generate triangle pattern based on position
  const getTriangleRows = () => {
    if (position === 'top-left') {
      return [5, 4, 3, 2, 1];
    } else if (position === 'top-right') {
      return [5, 4, 3, 2, 1];
    } else if (position === 'bottom-left') {
      return [1, 2, 3, 4, 5];
    } else {
      return [1, 2, 3, 4, 5];
    }
  };

  const rows = getTriangleRows();
  let dotIndex = 0;

  return (
    <div className={`absolute ${positionClasses[position]} opacity-60`}>
      <div className="flex flex-col gap-2">
        {rows.map((dotsInRow, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`flex gap-2 ${position === 'top-right' || position === 'bottom-right' ? 'justify-end' : ''}`}
          >
            {Array.from({ length: dotsInRow }).map(() => {
              const currentIndex = dotIndex++;
              return (
                <div
                  key={currentIndex}
                  className="w-2 h-2 rounded-full bg-primary animate-glow"
                  style={{ animationDelay: `${currentIndex * 0.1}s` }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DotPattern;
