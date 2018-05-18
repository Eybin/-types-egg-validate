# Setup

> `nrm add eybin http://npm.eybin.com`

> `nrm use eybin`

# Installation
> `npm install --save @types/egg-passport`

# Usage

```typescript
// app/router.ts
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  ...

  app.passport.mount('local', {
    successRedirect: '/auth/callback',
  });

  ...

};
```

```typescript
// app.ts
import { Application } from 'egg';

export default (app: Application) => {
    app.passport.verify(async (ctx, user) => {
        ...
        return user;
    });
};

```

# Summary
This package contains type definitions for egg-passport