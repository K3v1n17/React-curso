import { useQuery } from "@tanstack/react-query";
import { getProductsByIdAction } from "../actions/get-products-by-id.action";

export const useProduct = (id:string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductsByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return { ...query };
};
