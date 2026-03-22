# FirewallUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Firewall ](imtadminapi_config_firewall.md "Functions")/ FirewallUpdate | [](imtadminapi_firewallunsubscribe.md "FirewallUnsubscribe") [](imtadminapi_firewallupdatebatch.md "FirewallUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FirewallUpdate
Add or update a firewall configuration.
C++
MTAPIRES IMTAdminAPI::FirewallUpdate( IMTConFirewall* config // Firewall configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.FirewallUpdate( CIMTConFirewall config // Firewall configuration object )  
---  
Python
AdminAPI.FirewallUpdate( config # Firewall configuration object )  
---  
Parameters
config
[in] The firewall configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.