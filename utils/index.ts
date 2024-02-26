import { URLShorted } from "@/types/url.model";

export function isValidURL(value: string): boolean {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
return !!pattern.test(value);
}

export function withHttp(url: string) {
  if(url.indexOf('http://') === -1) {
    return 'http://' + url
  }
  return url
}

export function withoutHttp(url: string) {
  if(url?.startsWith('http')) {
    return url.split('://').at(-1)
  }
  return url
}

// Simula ralentizaciones en operaciones asincronas
export const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

export const sortDate = (a: URLShorted, b: URLShorted) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  return dateB.getTime() - dateA.getTime();
};

export function uniquesURLs(all: URLShorted[]): URLShorted[] {
  const result = Object.values(
    all.reduce((acc, obj) => ({ ...acc, [obj.url_id]: obj }), {})
  ) as URLShorted[];
  return result.sort(sortDate)
}