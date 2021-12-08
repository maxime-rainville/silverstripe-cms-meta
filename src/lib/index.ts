import { ReleaseLine } from './ReleaseLine';
import { SSModule } from './SSModule';
import raw from './data.json';
import cwp27x from './release-set/cwp/cwp-recipe-kitchen-sink/2.7.x-dev.json';
import cwp28x from './release-set/cwp/cwp-recipe-kitchen-sink/2.8.x-dev.json';
import installer410x from './release-set/silverstripe/installer/4.10.x-dev.json';
import installer47x from './release-set/silverstripe/installer/4.7.x-dev.json';
import installer48x from './release-set/silverstripe/installer/4.8.x-dev.json';
import installer49x from './release-set/silverstripe/installer/4.9.x-dev.json';
import installer4x from './release-set/silverstripe/installer/4.x-dev.json';
import sink410x from './release-set/silverstripe/recipe-kitchen-sink/4.10.x-dev.json';
import sink49x from './release-set/silverstripe/recipe-kitchen-sink/4.9.x-dev.json';
import sink4x from './release-set/silverstripe/recipe-kitchen-sink/4.x-dev.json';



const data: readonly SSModule[] = raw;
const releases: {readonly [release: string]: ReleaseLine} = {
  'Silverstripe CMS 4.x': installer4x,
  'Silverstripe CMS 4.10.x': installer410x,
  'Silverstripe CMS 4.9.x': installer49x,
  'Silverstripe CMS 4.8.x': installer48x,
  'Silverstripe CMS 4.7.x': installer47x,

  'Silverstripe Sink 4.x': sink4x,
  'Silverstripe Sink 4.10.x': sink410x,
  'Silverstripe Sink 4.9.x': sink49x,
  'CWP 2.8.x': cwp28x,
  'CWP 2.7.x': cwp27x,

}

export {
  SSModule,
  data,
  releases,
  ReleaseLine
};
