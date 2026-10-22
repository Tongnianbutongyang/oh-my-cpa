import type { ThemeConfig } from 'antd';
import type { ThemePalette } from './palette';

/**
 * Clay: a soft pastel "claymorphism" layer over the base Ant Design config.
 *
 * Kept as a pure overlay so upstream changes to `createThemeConfig` flow through untouched; the
 * page-level look (puffy shadows, capsule shapes) lives in `clay.css`, scoped to
 * `[data-theme='clay']`.
 */
const CLAY_SHADOW = '0 10px 24px -8px rgba(122, 104, 160, 0.28), 0 2px 6px rgba(122, 104, 160, 0.10)';

export function applyClayTheme(base: ThemeConfig, t: ThemePalette): ThemeConfig {
  const comp = base.components ?? {};
  const pill = { borderRadius: 999, borderRadiusLG: 999, borderRadiusSM: 999 };
  return {
    ...base,
    token: {
      ...base.token,
      fontFamily: 'var(--font-ui)',
      borderRadius: 14,
      borderRadiusLG: 22,
      borderRadiusSM: 10,
      borderRadiusXS: 6,
      colorSuccess: '#3fae8f',
      colorWarning: '#e0954a',
      colorError: '#e06c8a',
      boxShadow: CLAY_SHADOW,
      boxShadowSecondary: CLAY_SHADOW,
      boxShadowTertiary: CLAY_SHADOW,
    },
    components: {
      ...comp,
      Button: { ...comp.Button, ...pill, controlHeight: 34, primaryShadow: '0 6px 14px -6px rgba(123,111,214,0.6)', defaultShadow: 'none' },
      Input: { ...comp.Input, borderRadius: 14, activeShadow: `0 0 0 3px ${t.accent}26` },
      InputNumber: { ...comp.InputNumber, borderRadius: 14 },
      Select: { ...comp.Select, borderRadius: 14, optionSelectedBg: '#e0d6fb' },
      Tag: { ...comp.Tag, borderRadiusSM: 999, defaultBg: '#f3eefb' },
      Segmented: { ...comp.Segmented, ...pill, itemSelectedBg: '#ffffff', trackBg: '#f1e9e1' },
      Card: { ...comp.Card, borderRadiusLG: 24 },
      Modal: { ...comp.Modal, borderRadiusLG: 26, boxShadow: CLAY_SHADOW },
      Drawer: { ...comp.Drawer },
      Popover: { ...comp.Popover, borderRadiusLG: 18, boxShadowSecondary: CLAY_SHADOW },
      Dropdown: { ...comp.Dropdown, borderRadiusLG: 18, boxShadowSecondary: CLAY_SHADOW },
      Menu: { ...comp.Menu, itemBorderRadius: 999, itemHeight: 40, itemColor: '#5a536c', itemSelectedBg: '#d9cef8', itemSelectedColor: '#3d2f9e' },
      Table: { ...comp.Table, borderRadiusLG: 20, headerBg: '#fbf5ee' },
      Switch: { ...comp.Switch, colorPrimary: '#7f70e8', colorPrimaryHover: '#6d5dde' },
      Notification: { ...comp.Notification, borderRadiusLG: 20 },
    },
  };
}
