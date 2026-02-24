import { deleteCookie, getCookie, setCookie } from 'cookies-next/client';
import { StateStorage } from 'zustand/middleware';

const cookieStorage: StateStorage = {
  getItem: (name: string) => {
    return getCookie(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    setCookie(name, value, { maxAge: 604800 }); // 7 days
  },
  removeItem: (name: string) => {
    deleteCookie(name);
  },
};

export default cookieStorage;
