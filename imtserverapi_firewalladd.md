# FirewallAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Firewall ](serverapi_config_firewall.md "Firewall")/ FirewallAdd | [](imtserverapi_firewallunsubscribe.md "FirewallUnsubscribe") [](imtserverapi_firewalldelete.md "FirewallDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FirewallAdd
Add or update a firewall configuration.
MTAPIRES IMTServerAPI::FirewallAdd( IMTConFirewall* config // Firewall configuration object )  
---  
Parameters
config
[in] The firewall configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. The key comparison fields are the beginning and end of the range of addresses -[ IMTConFirewall::From()](imtconfirewall_from.md "From") and [IMTConFirewall::To()](imtconfirewall_to.md "To"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConFirewallSink::OnFirewallUpdate](imtconfirewallsink_onfirewallupdate.md "OnFirewallUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.