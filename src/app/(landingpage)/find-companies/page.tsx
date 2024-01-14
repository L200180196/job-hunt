"use client"
import { formFilterCompanySchema, formFilterSchema } from '@/lib/form-schema'
import { companyType, filterFormType } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ExploreDataContainer from '@/containers/ExploreDataContainer'
import { CATEGORIES_OPTIONS } from '@/constant'
import useCategoryCompanyFilter from '@/hooks/useCategoryCompanyFilter'
import useCompanies from '@/hooks/useCompanies'
interface FindCompaniesPageProps {

}

const FindCompaniesPage: FC<FindCompaniesPageProps> = ({}) => {
    const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
        resolver: zodResolver(formFilterCompanySchema),
        defaultValues: {
          industry: []
        }
      })
    
    const onSubmitFormFilter = async (val: z.infer<typeof formFilterCompanySchema>) => {
        setCategories(val.industry)
    }

    const {filters} = useCategoryCompanyFilter()

    const [categories, setCategories] = useState<string[]>([])

    const {companies, isLoading, mutate} = useCompanies(categories) 

    useEffect(() => {
      mutate()
    }, [categories])

    return (
        <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter} filterForms={filters} title='Dream Companies' 
          subtitle='Find your next career at companies like HubSpot, Nike, and Dropbox' loading={isLoading} type='company' data={companies}
        />
    )
}

export default FindCompaniesPage