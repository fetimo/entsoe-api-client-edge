# entsoe-api-client

Unofficial ENTSO-e transparency platform API Client for Deno and Node. Complete. Easy to use. Minimal.

[![Deno CI](https://github.com/Hexagon/entsoe-api-client/actions/workflows/deno.yml/badge.svg)](https://github.com/Hexagon/entsoe-api-client/actions/workflows/deno.yml) 
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Hexagon/entsoe-api-client/blob/master/LICENSE) 

*   Works in Deno >=1.26
*   Works in Node >=18
*   Native [TypeScript](https://www.typescriptlang.org/) typings
*   Support most aspects of Entso-e transparency platform REST API
*   Unzips and parses zip-file endpoints (e.g. outage documents) transparently
*   ESM (Deno, Node) and CommonJS (Node) support
*   Includes examples for getting Outages, Spot-prices, actual generation and generation forecast

### Documentation

Full library documentation is available at [https://deno.land/x/entsoe_api_client/mod.ts](https://deno.land/x/entsoe_api_client/mod.ts)

See [ENTSO-e REST API documentation](https://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html) for documentation on which parameters to use for each endpoint. 

All names, both parameters and output object keys, are simplified in this implementation, as an example `receiver_MarketParticipant.mRID` become `receiverMarketParticipantId`.

> **Note**
> These are the document types currently supported:
>
> - Publication_MarketDocument
> - GL_MarketDocument
> - Unavailability_MarketDocument
> - Configuration_MarketDocument
> - Balancing_MarketDocument
> - CriticalNetworkElement_MarketDocument
> - TransmissionNetwork_MarketDocument

### Installation

#### Deno

```javascript
import { QueryConfiguration } from "https://deno.land/x/entsoe_api_client/mod.ts";
```

#### Node

```
npm install entsoe-api-client --save
```

### Examples

Examples can be found in the [/examples](/examples) directory.

Pass your ENTSO-e API key by environment variable API_TOKEN when running the examples.

#### Deno

Powershell

```
$env:API_TOKEN="your-api-token"; deno run -A .\spot-prices-today.ts
```

Bash

```
API_TOKEN="your-api-token" deno run -A .\spot-prices-today.ts
```

#### Node

Powershell

```
$env:API_TOKEN="your-api-token"; node .\spot-prices-today.ts
```

Bash

```
API_TOKEN="your-api-token" node .\spot-prices-today.ts
```

## Contributing

All contributions are welcome.

Module developed for Deno. Node module is *generated* by [dnt](https://deno.land/manual@v1.30.3/advanced/publishing/dnt), using [scripts/build_npm.ts](/scripts/build_npm.ts).

See [Contribution Guide](/CONTRIBUTING.md)

> **Note**
> Please run `deno task precommit` before each commit, to make sure every file is tested/formatted/linted to standards.

## License

MIT
