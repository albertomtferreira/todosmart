import { cookies } from 'next/headers'

async function getCookieData() {
  return new Promise((resolve) =>
    setTimeout(() => {
      // cookies will be called outside of the async context, causing a build-time error
      resolve(cookies().getAll())
    }, 1000)
  )
}

export default async function Page() {
  const cookieData = await getCookieData()
  return <div>Hello World</div>
}