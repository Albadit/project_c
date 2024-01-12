export async function PostData(data: any, url: string) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

export async function PatchData(data: any, url: string) {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

export async function DeleteData(data: any, url: string) {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

export const FetchData = async (setData: React.Dispatch<React.SetStateAction<any>>, setLoading:React.Dispatch<React.SetStateAction<boolean>>, url:string ) => {
  try {
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setData(null);
    setLoading(false);
  }
};
