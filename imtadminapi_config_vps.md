# VPS (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ VPS | [](imtadminapi_automationget.md "AutomationGet") [](imtadminapi_vpscreate.md "VPSCreate") |
| --- | --- | --- |
| --- | --- |

MetaTrader VPS — a virtual hosting service for traders
The [Virtual Hosting](https://support.metaquotes.net/en/docs/mt5/client/virtual_hosting) service is extremely important for traders. It enables 24/7 operation of trading robots and [copied signals](https://www.mql5.com/en/signals), without the need to keep the PC turned on permanently. Furthermore, users do not have to worry about the hardware and connections. The service is available directly from the client terminals, so traders can start using it in just a few clicks. The service ensures minimal network delays between the terminal and the broker's server, as the system selects the nearest hosting server automatically.
Sponsored Hosting is a great tool for attracting new traders. Start providing a free useful service to your clients and create a competitive edge to attract more traders. Furthermore, by providing stable and continuous trading 24/7 for existing clients, you will increase trading volumes.
Find out more about the service in the [MetaTrader 5 Administrator Help files](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_vps).
The functions described in this section allow users to manage the Sponsored VPS settings, as well as subscribe and unsubscribe from events related to their changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [VPSCreate](imtadminapi_vpscreate.md "VPSCreate") | Create the VPS sponsorship settings object. |
| [VPSCreateRule](imtadminapi_vpscreaterule.md "VPSCreateRule") | Create a VPS allocation rule object. |
| [VPSCreateCondition](imtadminapi_vpscreatecondition.md "VPSCreateCondition") | Create a condition object for the VPS allocation rule. |
| [VPSCreateGroup](imtadminapi_vpscreategroup.md "VPSCreateGroup") | Create an entry object in the list of groups for which the Sponsored VPS is allowed. |
| [VPSSubscribe](imtadminapi_vpssubscribe.md "VPSSubscribe") | Subscribe to events and hooks associated with changes in the Sponsored VPS settings. |
| [VPSUnsubscribe](imtadminapi_vpsunsubscribe.md "VPSUnsubscribe") | Unsubscribe from events and hooks associated with changes in the Sponsored VPS settings. |
| [VPSGet](imtadminapi_vpsget.md "VPSGet") | Get the Sponsored VPS settings. |
| [VPSSet](imtadminapi_vpsset.md "VPSSet") | Update the Sponsored VPS settings. |