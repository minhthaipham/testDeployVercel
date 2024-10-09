import ListStory from '@/modules/StoryPage/page';
import React from 'react';

const Category = () => {
  return (
    <div className="p-2 relative">
      <ListStory />
      <div className="fixed bottom-10 right-10">
        <button className="bg-bgPrimaryTonalHover px-6 py-4 text-2xl rounded-full">
          <span className="text-black">+</span>
        </button>
      </div>
    </div>
  );
};

export default Category;
