import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import MiniCardYellow from './miniCardYellow'
import MiniCardBlack from './miniCardBlack'

export default function CardStatus() {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <Card>
                <CardHeader>
                    <CardTitle>โชคลาภ</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardBlack />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>การงาน</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardBlack />
                            <MiniCardBlack />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>การเงิน</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>สุขภาพ</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardBlack />
                            <MiniCardBlack />
                            <MiniCardBlack />
                            <MiniCardBlack />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>ความรัก</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardBlack />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>คำทำนาย ดี 80%</CardTitle>
                    <CardDescription>
                        <div className='flex space-x-1'>
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardYellow />
                            <MiniCardBlack />
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
