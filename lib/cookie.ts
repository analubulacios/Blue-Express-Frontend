import { URLShorted } from "@/types/url.model"
import { cookies } from "next/headers"

export function getLocalURLs() : URLShorted[] {
  const localURLs = JSON.parse(cookies().get('shortURLs')?.value || '[]') as URLShorted[]
  return localURLs
}

export function setLocalURL(shortURL: URLShorted) {
  const localURLs = getLocalURLs()
  localURLs.unshift(shortURL)
  cookies().set('shortURLs', JSON.stringify(localURLs))
}