# Routing (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Routing | [](imtserverapi_gatewayrestart.md "GatewayRestart") [](imtserverapi_routecreate.md "RouteCreate") |
| --- | --- | --- |
| --- | --- |

Routing Configuration
The MetaTrader 5 platform allows creating a custom set of rules of routing clients' requests received by trade servers. In each routing rule, you can set up the parameters of trade requests, as well as actions that shall apply to them.
Functions described in this section allow managing routing configurations, as well subscribe and unsubscribe from events associated with their change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [RouteCreate](imtserverapi_routecreate.md "RouteCreate") | Create an object of a routing rule. |
| [RouteConditionCreate](imtserverapi_routeconditioncreate.md "RouteConditionCreate") | Create an object of an additional condition to apply a rule. |
| [RouteDealerCreate](imtserverapi_routedealercreate.md "RouteDealerCreate") | Create an object of a dealer configuration to whom requests under this rule will be sent. |
| [RouteSubscribe](imtserverapi_routesubscribe.md "RouteSubscribe") | Subscribe to events and hooks associated with the configuration of request routing. |
| [RouteUnsubscribe](imtserverapi_routeunsubscribe.md "RouteUnsubscribe") | Unsubscribe from events and hooks associated with the configuration of request routing. |
| [RouteAdd](imtserverapi_routeadd.md "RouteAdd") | Add or update a routing rule. |
| [RouteDelete](imtserverapi_routedelete.md "RouteDelete") | Delete a routing rule by its name or index |
| [RouteShift](imtserverapi_routeshift.md "RouteShift") | Move a routing rule in the list. |
| [RouteTotal](imtserverapi_routetotal.md "RouteTotal") | The total number of routing rules available in the platform. |
| [RouteNext](imtserverapi_routenext.md "RouteNext") | Get a routing rule by the index. |
| [RouteGet](imtserverapi_routeget.md "RouteGet") | Get a routing rule by the name. |