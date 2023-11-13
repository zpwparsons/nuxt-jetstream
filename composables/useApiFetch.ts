import {UseFetchOptions} from 'nuxt/app';

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig();
    const token = useCookie('XSRF-TOKEN');

    let headers: any = {
        accept: 'application/json',
        referer: config.public.appUrl,
    };

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string;
    }

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie']),
        };
    }

    return useFetch(config.public.apiUrl + path, {
        credentials: 'include',
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
    });
}
