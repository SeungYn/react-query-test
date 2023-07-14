import Test from '@/components/Test';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

export default function Home() {
  const revalidate = async () => {
    'use server';

    revalidatePath('/');
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Test revalidate={revalidate} />
    </main>
  );
}
