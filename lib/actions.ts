'use server'

import { URLShorted } from "@/types/url.model";
import { withHttp } from "@/utils";
import { API_URL } from "@/utils/constants";
import { revalidateTag } from "next/cache";

export async function createShortURL(formData: FormData) {
  const longURL = formData.get('longURL') as string
  try {
    const response = await fetch(API_URL +  '/urls/shorten', {
      method: 'POST',
      body: JSON.stringify({original_url: withHttp(longURL)})
    }).then(res => res.json())

    //cookie


    
    revalidateTag('shortURLs')
    return response
  } catch (error) {
    console.error(error)
  }
}

export async function getAllShortURLs(): Promise<URLShorted[]> {
  try {
    const shortURLs = await fetch(API_URL + '/urls/all', {next: { tags: ['shortURLs'] }}).then(res => res.json()) as URLShorted[]
    // await wait(30000)
    return shortURLs.sort(sortDate)
  } catch (error) {
    throw new Error(error as string)
  }
}

const sortDate = (a: URLShorted, b: URLShorted) => {
  const fechaA = new Date(a.createdAt);
  const fechaB = new Date(b.createdAt);

  return fechaB.getTime() - fechaA.getTime();
};