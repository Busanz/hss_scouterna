import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get('NEXT_LOCALE')?.value;
  console.log('NEXT_LOCALE cookie:', cookieValue);

  const locale = cookieValue ?? 'sv';
  console.log('locale used:', locale);

  const messages =
    locale === 'en'
      ? (await import('../messages/en/index')).default
      : (await import('../messages/sv/index')).default;

  return { locale, messages };
});
