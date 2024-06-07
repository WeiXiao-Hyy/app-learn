import { useParams } from "next/navigation";
import { useMemo } from "react";

const useBook = () => {
  const params = useParams();

  const bookId = useMemo(() => { 
    if (!params?.bookId) {
      return ''
    }

    return params.bookId as string;
  }, [params?.bookId]);

  return useMemo(() => {
    bookId
  }, [bookId])
}

export default useBook;