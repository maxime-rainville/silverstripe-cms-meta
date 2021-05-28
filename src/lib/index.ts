import { ReleaseLine } from './ReleaseLine';
import { SSModule } from './SSModule';
import raw from './data.json';
import cwp26x from './release-set/cwp/cwp-recipe-kitchen-sink/2.6.x-dev.json';
import cwp27x from './release-set/cwp/cwp-recipe-kitchen-sink/2.7.x-dev.json';
import cwp28x from './release-set/cwp/cwp-recipe-kitchen-sink/2.8.x-dev.json';
import cwp2x from './release-set/cwp/cwp-recipe-kitchen-sink/2.x-dev.json';
import installer45x from './release-set/silverstripe/installer/4.5.x-dev.json';
import installer46x from './release-set/silverstripe/installer/4.6.x-dev.json';
import installer47x from './release-set/silverstripe/installer/4.7.x-dev.json';
import installer48x from './release-set/silverstripe/installer/4.8.x-dev.json';
import installer4x from './release-set/silverstripe/installer/4.x-dev.json';



const data: readonly SSModule[] = raw;
const releases: {readonly [release: string]: ReleaseLine} = {
  'Silverstripe CMS 4.x': installer4x,
  'Silverstripe CMS 4.8.x': installer48x,
  'Silverstripe CMS 4.7.x': installer47x,
  'Silverstripe CMS 4.6.x': installer46x,
  'Silverstripe CMS 4.5.x': installer45x,
  'CWP 2.x': cwp2x,
  'CWP 2.8.x': cwp28x,
  'CWP 2.7.x': cwp27x,
  'CWP 2.6.x': cwp26x,
}

export {
  SSModule,
  data,
  releases,
  ReleaseLine
};
