'use server';

import { cookies } from 'next/headers';

const LOCALE_COOKIE = 'NEXT_LOCALE';

export async function setUserLocale(locale: 'sv' | 'en') {
  (await cookies()).set(LOCALE_COOKIE, locale);
}
