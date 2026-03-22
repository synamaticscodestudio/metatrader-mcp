# CMTGatewayAPIFactory (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API")/ CMTGatewayAPIFactory | [](mtgatewaycreatelocal.md "MTGatewayCreateLocal") [](cmtgatewayapifactory_initialize.md "Initialize") |
| --- | --- | --- |
| --- | --- |

CMTGatewayAPIFactory
The interfaces factory is provided in the "MT5APIateway.h" file to ease the access to the IMTGatewayAPI interface. This factory automatically downloads a necessary GatewayAPI library (32/64-bit) and gives access to the [exported functions](gatewayapi_exported.md "Exported Functions").
The factory contains the following methods:
| Method | Description |
| --- | --- |
| --- | --- |
| [Initialize](cmtgatewayapifactory_initialize.md "Initialize") | Loading of Gateway API library and all functions exported by it. |
| [Shutdown](cmtgatewayapifactory_shutdown.md "Shutdown") | Gateway API library unloading. |
| [Create](cmtgatewayapifactory_create.md "Create") | Create an instance of the [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface. |
| [LicenseCheck](cmtgatewayapifactory_licensecheck.md "LicenseCheck") | Gateway/data feed module usage license verification. |
| [Version](cmtgatewayapifactory_version.md "Version") | Get the version of the loaded Gateway API library. |

Using factories in application development is optional. You can use your own implementation of corresponding functions.