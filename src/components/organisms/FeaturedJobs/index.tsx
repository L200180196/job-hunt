'use client'
import TitleSection from '@/components/atoms/TitleSection'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import JobItem from './JobItem'
import useSWR from 'swr'
import { fetcher, parsingJobs } from '@/lib/utils'
import { JobType } from '@/types'
import useFeaturedJobs from '@/hooks/useFeaturedJobs'

interface FeaturedJobsProps {

}

const FeaturedJobs: FC<FeaturedJobsProps> = ({ }) => {
    const { jobs, isLoading, error } = useFeaturedJobs();

    return (
      <div className='mt-32 mb-10'>
        <TitleSection word1='Featured' word2='jobs' />
        <div className='grid grid-cols-4 gap-8 mt-12'>
            {jobs.map((item: JobType) => (
                <JobItem key={item.id} 
                  {...item}
                  // image={item.image} jobType={item.jobType} name={item.name} type={item.type} location={item.location}
                  // desc={item.desc} categories={item.categories} applicants={item.applicants} needs={item.needs} id={item.id}
                />
                
            ))}
        </div>
      </div>
    )
}

export default FeaturedJobs