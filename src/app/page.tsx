"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'


export default function Page() {
  const router = useRouter()

  return (
    <div className='flex justify-center text-yellow-400 bg-black'>
      <div>
        <Image
          className=''
          alt='tarodCardImg'
          src="/img/home/section1.jpg"
          width={1200}
          height={600}
        />
        <h1 className='font-medium text-3xl text-center my-5'>
          รู้จังหวะชีวิตล่วงหน้า ดีกว่าเสียเวลาไปทั้งชีวิต
        </h1>
        <h1 className='font-medium text-3xl text-center my-5'>
          หมอตอง ตัวแทนพระศิวะ หมอดูอายุน้อยที่สุด ลูกศิษย์การันตีความแม่น
        </h1>
        <Image
          className='p-5'
          alt='tarodCardImg'
          src="/img/home/199btn.png"
          width={1200}
          height={600}
        />
        <div className='px-3'>
          <Button size={"lg"} className='text-center w-full bg-yellow-400 hover:bg-yellow-300' onClick={() => router.push('/card')}>
            <p className='text-black  text-lg'>เริ่มทำนาย</p>
          </Button>
        </div>
        <h1 className='font-medium text-6xl text-center my-5'>
          หมอตอง ตัวแทนพระศิวะ
        </h1>
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section4.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section5.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section2.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section3.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section6.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section7.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section9.jpg"
          width={1200}
          height={600}
        />
        <Image
          className='p-3'
          alt='tarodCardImg'
          src="/img/home/section8.jpg"
          width={1200}
          height={600}
        />
      </div>
    </div>
  )
}
