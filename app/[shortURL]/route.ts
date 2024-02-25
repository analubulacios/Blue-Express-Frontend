import { API_URL } from "@/utils/constants"
import { redirect } from 'next/navigation'

 
export async function GET(request: Request) {
  const { pathname } = new URL(request.url)

  const longURL = await fetch(`${API_URL}/urls${pathname}`)
  .then(res => {
    if(!res.ok) {
      throw new Error('url not found')
    }
    return res.text()
  })
  .catch(err => console.log(err))

  if(!longURL) redirect('/not-found')

  redirect(longURL)
}