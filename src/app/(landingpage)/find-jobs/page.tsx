"use client"
import ExploreDataContainer from '@/containers/ExploreDataContainer'
import { formFilterSchema } from '@/lib/form-schema'
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { JobType, filterFormType } from '@/types'
import { CATEGORIES_OPTIONS } from '@/constant'
import useCategoryJobFilter from '@/hooks/useCategoryJobFilter'
import useJobs from '@/hooks/useJobs'

export default function FindJobsPage() {
  const {filters} = useCategoryJobFilter()   
   
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: []
    }
  })

  // const categories = useMemo(() => {
  //   return formFilter.getValues('categories')
  // }, [formFilter])

  const [categories, setCategories] = useState<string[]>([])

  const {jobs, isLoading, mutate} = useJobs(categories) 

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories)
  }

  useEffect(() => {
    mutate()
  }, [categories])

  return (
    <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter} filterForms={filters} 
      title='Dream job' subtitle='Find your next career at companies like HubSpot, Nike, and Dropbox' loading={isLoading}
      type='job' data={jobs}
    />
  )
}
