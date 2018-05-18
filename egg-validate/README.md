# Setup

> `nrm add eybin http://npm.eybin.com`

> `nrm use eybin`

# Installation
> `npm install --save @types/egg-validate`

# Usage

```typescript
import { Controller } from 'egg';

export default class AuthController extends Controller {

  private validateRule: IValidateRule = {
    username: 'string',
    password: 'password',
  };

  async login() {
    const { ctx } = this;
    ctx.validate(this.validateRule);
    ...
  }

  ...
}
```

# Summary
This package contains type definitions for egg-validate