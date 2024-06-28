// src/hooks/useQuotes.ts
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

const useGetQuotes = () => {
  const { data, error } = useSWR('https://test-api.oneport365.com/api/admin/quotes/assessment/get?start_date=2024-06-01T00:00:00.000Z&end_date=2024-06-18T10:00:00.000Z', fetcher);

  return {
    quotes: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetQuotes;
