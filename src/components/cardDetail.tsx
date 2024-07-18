import React from 'react'
import { RadarChartCard } from './radarChart'
import CardStatus from './cardStatus'
import CardDescription from './cardText'

export default function CardDetail() {
    return (
        <div className='my-5 grid gap-3'>
            <RadarChartCard />
            <CardStatus />
            <CardDescription />
        </div>
    )
}
