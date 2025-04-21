interface CookieOptions {
    maxAge: number;
    priority: 'high' | 'low' | 'medium';
    secure: boolean;
    size: number;
}

const commonCookieOptions: CookieOptions = {
    maxAge: 60 * 60 * 24 * 30,
    priority: 'high',
    secure: true,
    size: 20480
};

const useTokenCookie = () => useCookie<string | null>('token', commonCookieOptions);
const useUserCookie = () => useCookie<string | null>('user', commonCookieOptions);

export function accessToken(): string | null {
    const cookieToken = useTokenCookie();
    return cookieToken.value || null;
}

export function getUser(): string | null {
    const cookieUser = useUserCookie();
    return cookieUser.value || null;
}

export const setCookies = (name: string, value: string, options: CookieOptions = commonCookieOptions): void => {
    const cookie = useCookie<string | null>(name, options);
    cookie.value = value;
};

export const setUser = (user: string): boolean => {
    setCookies('user', user || '', commonCookieOptions);
    return true;
};

export const setAccessToken = (authorization: string): boolean => {
    setCookies('token', authorization || '', commonCookieOptions);
    return true;
};

export const resetAllCookies = (): boolean => {
    setCookies('token', '');
    setCookies('user', '');
    return true;
};
