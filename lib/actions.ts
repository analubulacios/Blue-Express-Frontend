'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { URLShorted } from "@/types/url.model";
import { sortDate, uniquesURLs, withHttp } from "@/utils";
import { API_URL } from "@/utils/constants";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { getLocalURLs, setLocalURL } from "./cookie";

export async function createShortURL(formData: FormData) {
  const longURL = formData.get('longURL') as string

  const res = await fetch(API_URL +  '/urls/shorten', {
    method: 'POST',
    body: JSON.stringify({original_url: withHttp(longURL)})
  })

  if(!res.ok) throw new Error('Failed to fetch data');
  const urlShorted = await res.json()

  setLocalURL(urlShorted)
  revalidateTag('shortURLs')
  return;
}

export async function fetchShortURLs(): Promise<URLShorted[]> {
  const session = await getServerSession(authOptions)
  if(!session) return [];

  const res = await fetch(API_URL + '/urls/all', {
    next: { tags: ['shortURLs'] }
  })

  if(!res.ok) throw new Error('Failed to fetch data');

  return res.json()
}

export async function getAllShortURLs(): Promise<URLShorted[]> {
  const userURLs = await fetchShortURLs()
  const localURLs = getLocalURLs()

  return uniquesURLs([...userURLs, ...localURLs].sort(sortDate))
}
