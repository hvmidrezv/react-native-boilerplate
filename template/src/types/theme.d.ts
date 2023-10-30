import type {Theme as Base} from '@src/theme/types';

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends Base {}
}
