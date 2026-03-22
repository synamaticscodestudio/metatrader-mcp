# Gateways (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Gateways | [](imtserverapi_historysyncnext.md "HistorySyncNext") [](imtserverapi_gatewaycreate.md "GatewayCreate") |
| --- | --- | --- |
| --- | --- |

Gateway Configuration
Gateways are used for integrating the MetaTrader 5 platform with external trading systems. Gateways allow to transmit trade operations to external systems, as well as transmit quotes and news from them.
Functions described in this section allow managing the gateway configurations, as well subscribe and unsubscribe from events associated with their change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [GatewayCreate](imtserverapi_gatewaycreate.md "GatewayCreate") | Create an object of the gateway configuration. |
| [GatewayModuleCreate](imtserverapi_gatewaymodulecreate.md "GatewayModuleCreate") | Create an object of configuration of the gateway module. |
| [GatewayParamCreate](imtserverapi_gatewayparamcreate.md "GatewayParamCreate") | Create an object of the gateway parameter. |
| [GatewayTranslateCreate](imtserverapi_gatewaytranslatecreate.md "GatewayTranslateCreate") | Create an object of the parameter for converting the information received by the gateway. |
| [GatewaySubscribe](imtserverapi_gatewaysubscribe.md "GatewaySubscribe") | Subscribe to events and hooks associated with the gateway configuration. |
| [GatewayUnsubscribe](imtserverapi_gatewayunsubscribe.md "GatewayUnsubscribe") | Unsubscribe from events and hooks associated with the gateway configuration. |
| [GatewayAdd](imtserverapi_gatewayadd.md "GatewayAdd") | Add or update a gateway configuration. |
| [GatewayDelete](imtserverapi_gatewaydelete.md "GatewayDelete") | Delete a gateway configuration by the name or index |
| [GatewayShift](imtserverapi_gatewayshift.md "GatewayShift") | Change the position of a gateway configuration in the list. |
| [GatewayTotal](imtserverapi_gatewaytotal.md "GatewayTotal") | The total number of gateway configurations available in the platform. |
| [GatewayNext](imtserverapi_gatewaynext.md "GatewayNext") | Get the gateway configuration by the index. |
| [GatewayGet](imtserverapi_gatewayget.md "GatewayGet") | Get the gateway configuration by the name. |
| [GatewayModuleTotal](imtserverapi_gatewaymoduletotal.md "GatewayModuleTotal") | The total number of gateway modules available in the platform. |
| [GatewayModuleNext](imtserverapi_gatewaymodulenext.md "GatewayModuleNext") | Get the gateway module by the index. |
| [GatewayModuleGet](imtserverapi_gatewaymoduleget.md "GatewayModuleGet") | Get the gateway module by the name. |
| [GatewayRestart](imtserverapi_gatewayrestart.md "GatewayRestart") | Restart gateways. |