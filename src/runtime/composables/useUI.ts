import { useAppConfig } from '#imports';
import omit from 'just-omit';
import get from 'just-safe-get';
import { computed, toValue, useAttrs, type Ref } from 'vue';
import type { Strategy } from '../types';
import { mergeConfig } from '../utils';

/**
 * Internal composable that helps merging `app.config.ts` and component `ui` classes.
 *
 * It returns the merged `ui` configs and the `attrs` without the `class` to avoid clashes
 */
export const useUI = <T>(
  key: string,
  $ui: Ref<Partial<T & { strategy: Strategy }> | undefined>,
  $config?: Ref<T> | T,
) => {
  const $attrs = useAttrs();
  const appConfig = useAppConfig();

  const ui = computed(() => {
    const _ui = toValue($ui);
    const _config = toValue($config);

    return mergeConfig<T>(
      _ui?.strategy || 'merge',
      _ui || {},
      process.dev ? get(appConfig.ui, key, {}) : {},
      _config || {},
    );
  });

  const attrs = computed(() => omit($attrs, ['class']));

  return { ui, attrs };
};
