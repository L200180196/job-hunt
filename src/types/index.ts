export type JobType = {
    id: string,
    image: string;
    jobType: string;
    name: string;
    type: string;
    location: string;
    desc: string;
    category: categoryJobType;
    needs: number
    applicants: number
    skills: string[]
}

export type optionType = {
    id: string;
    label: string
}

export type filterFormType = {
    label: string
    name: string
    items: optionType[]
}

export type companyTeamType = {
    id: string
    name: string
    position: string
    instagram: string
    linkedIn: string
}

export type companySosmedType = {
    id: string
    instagram: string
    twitter: string
    facebook: string
    linkedIn: string
    youtube: string
}

export type companyType = {
    id: string
    image: string
    totalJobs: number
    name: string
    description: string
    website: string
    location: string
    industry: string
    employee: string
    dateFounded: Date
    techStack: string[]
    sosmed: companySosmedType
    teams: companyTeamType[]
}

export type categoryJobType = {
    id: string,
    name: string,
    totalJobs: number
}