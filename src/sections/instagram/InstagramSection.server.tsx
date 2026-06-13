import type { InstagramDataType } from '@/types/types';
import InstagramSection from './InstagramSection';

const URL: string = 'https://feeds.behold.so/au47cEddhn57lA49VlAe';

export default async function InstagramSectionServer() {
  let data: InstagramDataType | null = null;
  let error: boolean = false;

  try {
    const res = await fetch(URL, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error('Failed');

    const json: InstagramDataType = await res.json();

    if (!json.posts || json.posts.length === 0) {
      error = true;
    } else {
      data = json;
    }
  } catch {
    error = true;
  }

  return <InstagramSection instagramData={data} error={error} />;
}
