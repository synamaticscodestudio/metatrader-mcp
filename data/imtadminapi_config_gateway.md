# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Gateways | [](imtadminapi_historysyncnext.md "HistorySyncNext") [](imtadminapi_gatewaycreate.md "GatewayCreate") |
| --- | --- | --- |
| --- | --- |

Gateway Configuration
Functions allow managing the gateway configurations, as well subscribe and unsubscribe from events associated with their change.
To manage the configuration of gateways, the following functions are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [GatewayCreate](imtadminapi_gatewaycreate.md "GatewayCreate") | Create an object of the gateway configuration. |
| [GatewayModuleCreate](imtadminapi_gatewaymodulecreate.md "GatewayModuleCreate") | Create an object of configuration of the gateway module. |
| [GatewayParamCreate](imtadminapi_gatewayparamcreate.md "GatewayParamCreate") | Create an object of the gateway parameter. |
| [GatewayTranslateCreate](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") | Create an object of the parameter for converting the information received by the gateway. |
| [GatewaySubscribe](imtadminapi_gatewaysubscribe.md "GatewaySubscribe") | Subscribe to events associated with the gateway configuration. |
| [GatewayUnsubscribe](imtadminapi_gatewayunsubscribe.md "GatewayUnsubscribe") | Unsubscribe from events associated with the gateway configuration. |
| [GatewayRestart](imtadminapi_gatewayrestart.md "GatewayRestart") | Restart gateways. |
| [GatewayUpdate](imtadminapi_gatewayupdate.md "GatewayUpdate") | Add or update a gateway configuration. |
| [GatewayUpdateBatch](imtadminapi_gatewayupdatebatch.md "GatewayUpdateBatch") | Add or edit multiple gateway configurations. |
| [GatewayDelete](imtadminapi_gatewaydelete.md "GatewayDelete") | Delete a gateway configuration by the name or index. |
| [GatewayDeleteBatch](imtadminapi_gatewaydeletebatch.md "GatewayDeleteBatch") | Delete multiple gateway configurations. |
| [GatewayShift](imtadminapi_gatewayshift.md "GatewayShift") | Change the position of a gateway configuration in the list. |
| [GatewayTotal](imtadminapi_gatewaytotal.md "GatewayTotal") | The total number of gateway configurations available in the platform. |
| [GatewayNext](imtadminapi_gatewaynext.md "GatewayNext") | Get the gateway configuration by the index. |
| [GatewayGet](imtadminapi_gatewayget.md "GatewayGet") | Get the gateway configuration by the name. |
| [GatewayModuleTotal](imtadminapi_gatewaymoduletotal.md "GatewayModuleTotal") | The total number of configurations of gateway modules available in the platform. |
| [GatewayModuleNext](imtadminapi_gatewaymodulenext.md "GatewayModuleNext") | Get the gateway module by the index. |
| [GatewayModuleGet](imtadminapi_gatewaymoduleget.md "GatewayModuleGet") | Get the gateway module configuration by the name. |
| [GatewayPositionRequest](imtadminapi_gatewaypositionrequest.md "GatewayPositionRequest") | Request the current state of positions from the trading accounts used by the gateway in an external system. |