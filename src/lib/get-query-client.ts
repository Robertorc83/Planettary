import {QueryClient} from '@tanstack/query-core';
import {cache} from 'react';

//React query setup we need to use it in server components
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
