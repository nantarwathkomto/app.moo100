import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RadarChartCard } from './radarChart'
import CardStatus from './cardStatus'

export default function CarText() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>คำทำนาย 🔮</CardTitle>
                    <CardDescription>
                        ฟ้าเปิด ตาสว่าง หมดเคราะห์ หมดทุกข์
                        จากนี้ไปมีแต่เรื่องดีๆ
                        ชีวิตประสบความสำเร็จ
                        หยิบจับอะไรเป็นเงินเป็นทอง มหาเฮง
                        <br />
                        <br />
                        หมดทุกข์ หมดโศก
                        ใครที่ป่วยอยู่จะได้เจอหมอดียาดี
                        อยู่ในช่วงบำบัดฟื้นฟู
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
