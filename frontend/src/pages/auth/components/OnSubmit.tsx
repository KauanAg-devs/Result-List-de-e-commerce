import { NavigateFunction } from "react-router-dom";

interface ErrorData {
  message: string;
  error: string;
  statusCode: number;
}

type SetErrorData = React.Dispatch<React.SetStateAction<ErrorData | undefined>>;

interface OnSubmitParams {
  formData: object
  setErrorData?: SetErrorData;
  navigate: NavigateFunction;
  navigateTo: string;
}

export const onSubmit = async (fetchTo: string, {
  formData,
  setErrorData,
  navigate,
  navigateTo
}: OnSubmitParams) => {
  try {
    const response = await fetch(fetchTo, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const errorData: ErrorData = await response.json();
      if(setErrorData) setErrorData(errorData);
    } else {
      navigate(navigateTo); 
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
