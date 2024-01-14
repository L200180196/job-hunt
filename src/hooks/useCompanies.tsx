import { fetcher, parsingCompanies, parsingJobs } from "@/lib/utils"
import { JobType } from "@/types"
import { useCallback, useEffect, useMemo, useState } from "react"
import useSWR from "swr"

const COMPANY_PATH = '/api/company/filter'

const useCompanies = (filter?: string[]) => {
    const paramsCategory = useMemo(() => {
        if (filter && filter.length > 0) {
            return filter.join(',')
        }

        return ""
    }, [filter])

    const { data, isLoading, error, mutate } = useSWR(`${COMPANY_PATH}?category=${paramsCategory}`, fetcher, {revalidateOnMount: false})

    const [companies, setCompanies] = useState<JobType[]>([])

    const parseCompany = useCallback(async () => {
        const parseData = await parsingCompanies(data, isLoading, error)
        setCompanies(parseData)
    }, [data, isLoading, error])

    useEffect(() => {
        parseCompany()
    }, [data, isLoading, error])

    return {
        companies, mutate, isLoading
    }
}

export default useCompanies