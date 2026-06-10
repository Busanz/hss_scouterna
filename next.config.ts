import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    "allowedDevOrigins": ['192.168.56.1'],
  
};

export default withNextIntl(nextConfig);
