import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    window.addEventListener('contextmenu', disableRightClick);
    
    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div>
      <h1>Right click is disabled</h1>
      {/* Rest of your components */}
    </div>
  );
}

export default App;
