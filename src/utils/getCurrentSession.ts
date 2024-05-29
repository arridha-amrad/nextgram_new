import { cache } from 'react';
import { getServerSession } from 'next-auth/next';

export default cache(getServerSession);
