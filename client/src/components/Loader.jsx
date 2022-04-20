import React from 'react'

const Loader = () => (
  <div className="flex justify-center items-center py-3">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500" />
  </div>
);

export default Loader;