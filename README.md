# silverstripe-cms-meta

This package contains meta data about various Silverstripe CMS modules. If you need a consistent list of Silverstripe modules that you can import into a JS project, you can require this package.

Used by:
- [Silverstripe CMS Squad Dashboard](https://github.com/maxime-rainville/travis-dashboard)
- [Silverstripe CMS Dashboard CLI](https://github.com/maxime-rainville/silverstripe-cms-dashboard)

## How to use

```ts
import {data as ssData} from 'silverstripe-cms-meta';

const filteredlist = ssData.filter({repo} => repo === 'silverstripe/silverstripe-framework');

const frameworkMeta = filteredlist[0];

console.dir(frameworkMeta)
```

The output will look somthing like this. 
- `repo` is the name of the module on GitHub.
- `name` should match the packagist name for the module, if it differs from repo.
- `core` is for modules included in `silverstripe/installer`
- `supported` is for modules included in the CWP kitchen sink

```json
{
  "repo": "silverstripe/silverstripe-framework",
  "name": "silverstripe/framework",
  "core": true,
  "supported": true
}
```

## How to update the meta data

Do a PR updating [`src/lib/data.json`](https://github.com/maxime-rainville/silverstripe-cms-meta/blob/master/src/lib/data.json).

Once the PR is merged, tag a new release in GitHub. There's a GitHub action that will automatically rebuild the package and publish it to NPM.
