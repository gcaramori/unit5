import { listFiles } from '@/app/utils/listFiles'

export function GET() {
  const files = listFiles('public/gallery')

  return Response.json(files)
}
