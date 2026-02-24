'use client';
import { useTokenStore } from '@/stores/tokenStore';
import { useUserStore } from '@/stores/userStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { useEffect, useEffectEvent, useState } from 'react';

const stores = [useTokenStore, useUserStore, useSettingsStore];

export const useHydration = () => {
  const [hydrationCount, setHydrationCount] = useState(0);

  const onInitCount = useEffectEvent(() => {
    let initCount = 0;
    for (const listener of stores) {
      if (listener.persist.hasHydrated()) {
        initCount += 1;
      }
    }
    setHydrationCount(initCount);
  });

  useEffect(() => {
    onInitCount();

    const unsubs = stores.map(store =>
      store.persist.onFinishHydration(() => {
        setHydrationCount(prev => prev + 1);
      }),
    );

    return () => {
      for (const unsub of unsubs) {
        unsub();
      }
    };
  }, []);

  return {
    hydrationProgess: (hydrationCount / stores.length) * 100,
    hydrated: hydrationCount >= stores.length,
  };
};
