import {useState} from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoading = (value:boolean) => setLoading(value)

  return {
    loading, setLoading, updateLoading
  }
}


export const useSuccessLoading = () => {
  const [successLoading, setSuccessLoading] = useState<boolean>(false);

  const updateSuccessLoading = (value:boolean) => setSuccessLoading(value)

  return {
    successLoading, setSuccessLoading, updateSuccessLoading
  }
}