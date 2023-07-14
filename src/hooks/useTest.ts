import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

async function fetchTest() {
  return fetch('/api/t', { method: 'get' }).then((res) => res.json());
}

async function postTest() {
  const data = await fetch('/api/t', { method: 'post' }).then((res) =>
    res.json()
  );
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 3000);
  });
  return data;
}
export default function useTest() {
  const queryClient = useQueryClient();
  const { data, refetch } = useQuery(['test'], () => fetchTest());

  const { mutate, mutateAsync } = useMutation(() => postTest(), {
    onSuccess: () => {
      console.log('success');
      queryClient.invalidateQueries(['test']);
    },
  });

  return { data, mutate, mutateAsync, refetch };
}
