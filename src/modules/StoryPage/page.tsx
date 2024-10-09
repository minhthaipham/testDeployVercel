'use client';
import { LtWelcome } from '@/assets/lotties';
import AdnTextField from '@/common/OlComponent/AdnTextField/AdnTextField';
import { ESize } from '@/common/OlComponent/Helpers/Adnsize.enum';
import { ICategory } from '@/common/types';
import { useGetAllCategoriesQuery } from '@/lib/services/modules/storyService';
import Lottie from 'lottie-react';
import React, { use, useEffect } from 'react';

export default function ListStory() {
  const [isFetchingCategory, setIsFetchingCategory] = React.useState(true);
  const { isFetching, data } = useGetAllCategoriesQuery({}, { skip: false });
  useEffect(() => {
    if (!isFetching) {
      setIsFetchingCategory(false);
    }
  }, [isFetching]);
  return (
    <div className="flex flex-wrap gap-5 items-center">
      {isFetchingCategory ? (
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
          <Lottie
            animationData={LtWelcome}
            className="flex justify-center items-center h-full cursor-pointer hover:scale-110 duration-300"
            loop={true}
          />
        </div>
      ) : (
        data?.map((category: ICategory) => (
          <div
            key={category.categoryId}
            className="bg-bgNeutralSolidDefault p-4 rounded-[10px]
          min-w-[200px] max-w-[300px] w-full"
          >
            <span className="text-fgNeutralHighEmphasis text-lg font-bold">
              {category.name}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
