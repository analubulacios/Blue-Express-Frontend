'use server'

import { URLShorted } from "@/types/url.model";
import { sortDate, uniquesURLs, withHttp } from "@/utils";
import { API_URL } from "@/utils/constants";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { getLocalURLs, setLocalURL } from "./cookie";
import { cookies } from "next/headers";

export async function getToken() {
  const session = await getServerSession()
  if(!session) return null

  const localURLs = getLocalURLs()
  const { token } = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    body: JSON.stringify({ email: session?.user.email, localURLs })
  }).then(res => res.json())

  return token
}

export async function createShortURL(formData: FormData) {
  try {
    const token = await getToken()
    const longURL = formData.get('longURL') as string
    const session = await getServerSession()  
    const res = await fetch(API_URL + '/urls/shorten', {
      method: 'POST',
      body: JSON.stringify({original_url: withHttp(longURL)}),
      headers: {
        Authorization: `Bearer ${token || ''}`
      }
    })
    
    const urlShorted = await res.json()
    
    !session && setLocalURL(urlShorted)
    revalidateTag('shortURLs')
    
  } catch (error) {
    console.log(error)
  }
}

export async function getAllShortURLs(): Promise<URLShorted[]> {
  const userURLs = await fetchShortURLs()
  const localURLs = getLocalURLs()

  return uniquesURLs([...localURLs,...userURLs].sort(sortDate))
}

export async function fetchShortURLs(): Promise<URLShorted[]> {
  const token = await getToken()

  if(!token) return [];

  const res = await fetch(API_URL + '/urls/all_urls', {
    cache: 'no-store',
    next: { tags: ['shortURLs'] },
    headers: {
      Authorization: `Bearer ${token || ''}`
    }
  })

  if(!res.ok) return []

  return res.json()
}

export const _revalidateTag = (tag: string) => {
  revalidateTag(tag);
}

export async function deleteShortURL(id: string): Promise<void> {
  const localURLs = getLocalURLs().filter(({url_id}) => url_id !== id)
  cookies().set('shortURLs', JSON.stringify(localURLs))
  
  const token = await getToken()
  if(!token) return;

  const res = await fetch(API_URL + '/urls/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token || ''}`
    }
  })

  // if(!res.ok) throw new Error('Failed to fetch data');

  revalidateTag('shortURLs')
  return
}
