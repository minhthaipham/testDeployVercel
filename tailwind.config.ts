import type { Config } from 'tailwindcss';

const BaseColors = {
  white: '#FFFFFF',

  red100: '#FFE1E7',
  red200: '#FFC8D6',
  red300: '#FF9CB3',
  red400: '#FF2E68',
  red500: '#E1024F',
  red600: '#D1003F',

  violet100: '#E5E9FA',
  violet200: '#CFD5F6',
  violet300: '#9398E6',
  violet400: '#7977DB',
  violet500: '#695ECD',
  violet600: '#5A4EB4',

  green100: '#E0F8E9',
  green200: '#C3EFD4',
  green300: '#95E0B3',
  green400: '#5FC98A',
  green500: '#40C174',
  green600: '#30A65F',

  yellow100: '#FFF9EB',
  yellow200: '#FFEEC6',
  yellow300: '#FFDB88',
  yellow400: '#FFCC67',
  yellow500: '#FFBF41',
  yellow600: '#F8B83A',

  orange100: '#FFEDD5',
  orange200: '#FED8AA',
  orange300: '#FEBB73',
  orange400: '#FC943B',
  orange500: '#FA781A',
  orange600: '#EB5A0B',

  blue100: '#DFEAFA',
  blue200: '#C6DAF7',
  blue300: '#9FC2F1',
  blue400: '#71A1E9',
  blue500: '#4A7CE0',
  blue600: '#3B64D5',

  brand100: '#E1F8F5',
  brand200: '#D1F0ED',
  brand300: '#B9E8E4',
  brand400: '#33BBB2',
  brand500: '#00AA9F',
  brand600: '#0AA095',
  brand700: '#38DBD0',

  gray50: '#F2F5F7',
  gray100: '#E7EAED',
  gray150: '#E6E6E6',
  gray200: '#D8DCDF',
  gray300: '#B9BEC0',
  gray400: '#999999',
  gray500: '#646464',
  gray600: '#3D3D3D',
  gray700: '#202020',
};

const colorsConfig = {
  transparent: 'rgba(0,0,0,0)',
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  bgOnboard: '#E8F3F1',
  bgProgressInActive: '#ECECEC',
  bgVerifyCode: '#EFF9F9',
  bgOtherContact: '#EF3F47',
  /**
   * Semantic Colors
   */
  /* border color */
  borderNeutralDark: BaseColors.gray200,
  borderNeutralLight: BaseColors.gray50,
  borderSoftNeutral: BaseColors.gray100,
  borderNeutralDisable: BaseColors.gray300,
  borderPrimary: BaseColors.brand500,
  borderDanger: BaseColors.red500,

  /* foreground color: used for text, icon */
  fgBase: BaseColors.white,
  fgWarning: BaseColors.orange500,
  fgInProgress: BaseColors.blue500,
  fgTenant: BaseColors.yellow500,
  fgSuccess: BaseColors.green500,
  fgDanger: BaseColors.red500,
  fgPrimary: BaseColors.brand500,
  fgSupplier: BaseColors.violet500,
  fgHyperlink: '#0D42FF',

  fgNeutralDisable: BaseColors.gray300,
  fgNeutralSubtle: BaseColors.gray400,
  fgNeutralNormal: BaseColors.gray500,
  fgNeutralEmphasis: BaseColors.gray600,
  fgNeutralHighEmphasis: BaseColors.gray700,

  /* background color: specially for link button */

  bgBase: BaseColors.white,

  /* supplier */
  bgSupplierTonalDefault: BaseColors.violet100,
  bgSupplierTonalHover: BaseColors.violet200,
  bgSupplierTonalFocus: BaseColors.violet300,

  bgSupplierSolidDefault: BaseColors.violet500,
  bgSupplierSolidHover: BaseColors.violet400,
  bgSupplierSolidFocus: BaseColors.violet600,

  /* warning */
  bgWarningTonalDefault: BaseColors.orange100,
  bgWarningTonalHover: BaseColors.orange200,
  bgWarningTonalFocus: BaseColors.orange300,

  bgWarningSolidDefault: BaseColors.orange500,
  bgWarningSolidHover: BaseColors.orange400,
  bgWarningSolidFocus: BaseColors.orange600,

  /* tenant */
  bgTenantTonalDefault: BaseColors.yellow100,
  bgTenantTonalHover: BaseColors.yellow200,
  bgTenantTonalFocus: BaseColors.yellow300,

  bgTenantSolidDefault: BaseColors.yellow500,
  bgTenantSolidHover: BaseColors.yellow400,
  bgTenantSolidFocus: BaseColors.yellow600,

  /* success */
  bgSuccessTonalDefault: BaseColors.green100,
  bgSuccessTonalHover: BaseColors.green200,
  bgSuccessTonalFocus: BaseColors.green300,

  bgSuccessSolidDefault: BaseColors.green500,
  bgSuccessSolidHover: BaseColors.green400,
  bgSuccessSolidFocus: BaseColors.green600,

  /* danger */
  bgDangerTonalDefault: BaseColors.red100,
  bgDangerTonalHover: BaseColors.red200,
  bgDangerTonalFocus: BaseColors.red300,

  bgDangerSolidDefault: BaseColors.red500,
  bgDangerSolidHover: BaseColors.red400,
  bgDangerSolidFocus: BaseColors.red600,

  /* primary */
  bgPrimaryTonalDefault: BaseColors.brand100,
  bgPrimaryTonalHover: BaseColors.brand200,
  bgPrimaryTonalFocus: BaseColors.brand300,

  bgPrimarySolidDefault: BaseColors.brand500,
  bgPrimarySolidHover: BaseColors.brand400,
  bgPrimarySolidFocus: BaseColors.brand600,

  bgPrimaryHighContrast: BaseColors.brand700,

  bgPrimaryDisable: BaseColors.brand300,

  /* neutral */
  bgNeutralTonalDefault: BaseColors.gray50,
  bgNeutralTonalHover: BaseColors.gray100,
  bgNeutralSkeleton: BaseColors.gray150,
  bgNeutralTonalFocus: BaseColors.gray200,
  bgNeutralTonalDisable: BaseColors.gray400,
  bgNeutralDisable: BaseColors.gray200,
  bgNeutralTonalSkeleton: BaseColors.gray100,
  bgNeutralSolidDefault: BaseColors.gray100,

  /* overlay */
  bgOverlayDark: 'rgba(0, 0, 0, 0.6)',
  bgOverlayDarkish: 'rgba(0, 0, 0, 0.7)',
  bgOverlayLight: 'rgba(0, 0, 0, 0.2)',
  bgOverlaySemiTransparent: 'rgba(0, 0, 0, 0.40)',

  bgInProgressTonalDefault: BaseColors.blue100,
  bgInProgressTonalFocus: BaseColors.blue300,

  shadowNeutral: '#00000080',
};
const config: Config = {
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        zoomInLeft: {
          '0%': { transform: 'scale(0) translateX(100%)' },
          '100%': { transform: 'scale(1) translateX(0)'},
        }
      },
      animation: {
        zoomInLeft: 'zoomInLeft 3s ease-in-out forwards',
      },
      colors: {
        ...BaseColors,
        ...colorsConfig,
      },
    },
  },
  plugins: [],
};
export default config;
