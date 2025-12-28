'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function RedirectExample() {
    const [count, setCount] = useState(0);
    const [bepp, setBepp] = useState(false);
    const [visible, setVisible] = useState(true);
    const [title, setTitle] = useState("Checking your account status.....")

    const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
        setTitle("Redirecting...........")
        setVisible(v => !v);
        setCount(prev => {
        if (prev === 10) {
            clearInterval(interval);
            setTitle("Checking your account status.....")
            setVisible(true)
            return prev;
        }
        return prev + 1;
        });

        // trigger animation
        setBepp(true);
        setTimeout(() => {setBepp(false), router.push('/dashboard')}, 250);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className={bepp ? "animate-bepp" : "" }>
            <div className='flex space-x-5'>
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: visible ? 1 : 0.4 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className=""
                >
                    <Image
                    src={"/images/flowva-icon.png"}
                    alt="Animated image"
                    height={90}
                    width={90}
                    className=""
                    />
                </motion.div>
                <div className='font-sansita'>
                    <p className='text-purple-600 font-sansita text-2xl font-semibold mt-8'>
                        flowva
                    </p>

                </div>
            </div>

            <div className='mt-3 text-black text-lg text-center'>
                {title}

            </div>

        </div>

    </div>
  );
}
