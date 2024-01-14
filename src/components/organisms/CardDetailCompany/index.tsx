import React, { FC } from 'react'

interface CardDetailCompanyProps {
    icon: any
    word1: string
    word2: string
}

const CardDetailCompany: FC<CardDetailCompanyProps> = ({ icon, word1,word2 }) => {
    return (
        <div className='inline-flex items-center gap-3'>
            <div>
                <div className='bg-white p-3 rounded-full'>
                    {icon}
                </div>
            </div>
            <div>
                <div className='text-gray-500'>
                    Founded
                </div>
                <div className='font-semibold'>
                    March, 07 2024
                </div>
            </div>
        </div>
    )
}

export default CardDetailCompany