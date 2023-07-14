'use client';
import useTest from '@/hooks/useTest';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

async function fetchTest() {
  return fetch('/api/t', { method: 'get' }).then((res) => res.json());
}

export default function Test({
  revalidate,
}: {
  revalidate: () => Promise<void>;
}) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const { data, refetch, mutateAsync, mutate } = useTest();

  const onClick = async () => {
    // revalidate() or router.refresh()
    // revalidate();
    router.refresh();
  };

  console.log('data', data, 123);
  return (
    <div>
      <button className='text-neutral-200 text-xl' onClick={onClick}>
        Refreshbutton
      </button>
      <p className='text-neutral-100 text-xl'>{JSON.stringify(data)}</p>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>countUp</button>
    </div>
  );
}
