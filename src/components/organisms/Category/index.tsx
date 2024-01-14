'use client'
import TitleSection from '@/components/atoms/TitleSection'
import React, { FC, useMemo } from 'react'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import CategoryItem from './CategoryItem'
import useSWR from 'swr'
import { fetcher, parsingCategories } from '@/lib/utils'
import { categoryJobType } from '@/types'

interface CategoryProps {

}



const Category: FC<CategoryProps> = ({ }) => {
    const {data, isLoading, error} = useSWR('/api/jobs/categories', fetcher)
    const categories = useMemo(() => parsingCategories(data, isLoading, error), [data, isLoading, error])
    return (
      <div className='mt-32 mb-5'>
        <TitleSection word1='Explored by' word2='category' />
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-9 mt-12'>
            {categories.map((item: categoryJobType) => (
                <CategoryItem key={item.id} name={item.name} totalJobs={item.totalJobs} />
            ))}
        </div>
      </div>
    )
}

export default Category