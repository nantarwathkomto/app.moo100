'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Button } from '@/components/ui/button';
import CardDetail from '@/components/cardDetail';

type tarotType = {
  desc: string,
  meaning_rev: string,
  meaning_up: string,
  name: string,
  name_short: string,
  suit: string,
  value: string,
  value_int: number,
}

const numberOfCards = 62;

const _size = 60;
const _cardSize = {
  width: _size,
  height: _size * 1.67,
  borderRadius: 12
}

const cardVisibilityPercentage = .1;
const cardSize = _cardSize.width * cardVisibilityPercentage;
const circleRadius = Math.max(cardSize * numberOfCards / (2 * Math.PI), 20);



export default function Page() {
  const cards = Array.from({ length: 62 }, (_, i) => i + 1);
  const angleIncrement = 349 / cards.length;
  const distance = 20; // ระยะทางที่ต้องการเลื่อนขึ้น
  const [hoverIndex, setHoverIndex] = useState(null); // *เลือก Card ว่าจะให้ใบไหน Hover แล้วขยับขึ้น
  const [clickIndex, setClickIndex] = useState<number[]>([]); //*เลือก card เพื่อไปโชว์สามารถเลือกได้ 6 ใบ
  const [tarot, setTarot] = useState<tarotType[]>();
  const [translation, setTranslation] = useState({ x: 0, y: 0 }); //* Hover แล้วขยับขึ้น
  const [rotates, setRotates] = useState(cards.map((_, index) => index * angleIncrement));
  const [flip, setFlip] = useState(true);
  const [opacity, setOpacity] = useState(1);


  const calculateTranslation = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const x = -distance * Math.sin(radians); //* เปลี่ยนการคำนวณเป็น sine สำหรับ x
    const y = distance * Math.cos(radians); // *เปลี่ยนการคำนวณเป็น cosine สำหรับ y และใช้ -distance
    return { x, y };
  };

  const addanimation = (angle: number) => {
    const { x, y } = calculateTranslation(angle);
    setTranslation({ x, y });
  }

  const handleHover = (index: any, angle: number) => {
    setHoverIndex(hoverIndex === index ? null : index);
    addanimation(angle)
  };

  const handleClick = (index: any, angle: number) => {
    console.log(translation);
    setClickIndex((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      }
      if (clickIndex.length < 3) {
        return [...prevIndices, index];
      } else
        return [...prevIndices]
    });
    setHoverIndex(hoverIndex === index ? null : index);
    addanimation(angle)
  };

  async function TarotAPI() {
    const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
    const posts = await res.json()
    setTarot(posts.cards);
  }


  const resetRotation = () => {
    TarotAPI();
    setHoverIndex(null)
    cards.map((index) => {
      setRotates(prevRotates => prevRotates.map((rotate, i) => (i === index ? 0 : rotate)));
    })
    setFlip((prevState) => !prevState)
    setTimeout(() => {
      setOpacity(0)
    }, 2000);
  };


  return (
    <div className='bg-backHome bg-no-repeat bg-cover bg-center	 min-h-screen py-10 px-2 md:p-20 text-white overflow-x-hidden'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold shadow-lg bg-gradient-to-r from-[#dbc363] via-[#fbf5a9] to-[#bf9c47] inline-block text-transparent bg-clip-text'>ตั้งจิตอธิฐานเปิดไพ่ 3 ใบ</h1>
      </div>
      <AnimatePresence >
        {/* <div className='grid grid-cols-3 justify-items-center mt-5 md:gap-0'>
          <h1>ความรัก</h1>
          <h1>การงาน</h1>
          <h1>การเงิน</h1>
        </div> */}

        <motion.div className='grid grid-cols-3 justify-items-center mt-5 mb-5 h-[150px] md:gap-0'>
          {clickIndex.length > 0 && clickIndex.map((item, index) => {
            return (
              <motion.div
                animate={{ y: -10, opacity: 1, rotateY: flip ? 0 : 180 }}
                key={item}
                layoutId={item.toString()}
                initial={{ opacity: 0 }}
                transition={{
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                  ease: "easeIn",
                  type: 'spring'
                }}
                onClick={() => handleClick(item, item * angleIncrement)}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip ? 0 : 180 }}
                  className="Card"
                >
                  <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: flip ? 0 : 180 }}
                    style={{ display: flip ? "block" : "none" }}
                    className="front"
                  >
                    <Image
                      className='border-2 rounded-md'
                      alt='tarodCardImg'
                      src="/img/card-back.png"
                      width={100}
                      height={120}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: flip ? 180 : 0 }}
                    style={{ display: flip ? "none" : "block" }}
                    transition={{ duration: 0.7 }}
                    className="back"
                  >
                    <Image
                      className='border-2 rounded-md'
                      alt='tarodCardImg'
                      src={`/img/card/11_${index + 1}.png`}
                      width={100}
                      height={120}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
      <div className='flex justify-center items-center'>
        <div
          style={{
            width: `${circleRadius * 2}px`,
            height: `${circleRadius * 2}px`,
            borderRadius: circleRadius,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            display: 'flex',
            position: 'relative'
          }}>
          {cards.map((card, index) => {
            return <motion.div
              key={card}
              className={`absolute bg-orange-100 border-gray-900 text-white flex items-center justify-center border-2 rounded-md`}
              style={{
                boxShadow: `${hoverIndex === index ? `1px 1px 20px #000000` : ''}`,
              }}
              // กำหนด animate properties
              initial={{
                transformOrigin: "50% 235%",
              }}
              animate={{
                opacity: opacity,
                rotate: rotates[index],
                x: hoverIndex === index ? translation.x : 0,  // เลื่อนตามตำแหน่ง x ที่คำนวณได้
                y: hoverIndex === index ? translation.y : 0,  // เลื่อนตามตำแหน่ง y ที่คำนวณได
              }}
              transition={{
                duration: hoverIndex ? 1 : 3,
                ease: "easeIn",
                type: 'spring'
              }}
              onHoverStart={() => handleHover(index, index * angleIncrement)}
              onClick={() => {
                handleClick(index, index * angleIncrement)
              }}
            >
              <Image
                alt='tarodCardImg'
                src="/img/card-back.png"
                width={_cardSize.width}
                height={_cardSize.height}
                style={
                  { borderRadius: `${_cardSize.borderRadius}px`, }
                }
              />
            </motion.div>
          })}
          <div className='fixed z-30 bottom-5'>
            <Button size='lg' className='w-[150px] bg-yellow-200 text-black' style={{ display: flip ? "block" : "none" }} onClick={() => { resetRotation(); }}>
              ทำนาย
            </Button>
          </div>
        </div>
      </div>
      {tarot && <>
        <iframe src="https://drive.google.com/file/d/1NxkY4Ua_6SyZ6sEpuzUcvi28uiuCefU_/preview" width="100%" height="220"></iframe>
        <CardDetail />
      </>}
      {/* {tarot &&
        <motion.div className='fixed-center z-40'
          initial="hidden"
          animate={"show"}
          exit="hidden"
          variants={variants}
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {tarot.map((data, index) => {
              return <SwiperSlide key={index}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title={data.name} description={data.meaning_up} />
                </Card>
              </SwiperSlide>
            })}
          </Swiper>
        </motion.div>} */}
    </div>
  );
};
