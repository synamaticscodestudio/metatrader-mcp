# FirewallSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Firewall ](imtadminapi_config_firewall.md "Functions")/ FirewallSubscribe | [](imtadminapi_firewallcreate.md "FirewallCreate") [](imtadminapi_firewallunsubscribe.md "FirewallUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FirewallSubscribe
Subscribe to events associated with the firewall configuration.
C++
MTAPIRES IMTAdminAPI::FirewallSubscribe( IMTConFirewallSink* sink // A pointer to the IMTConFirewallSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.FirewallSubscribe( CIMTConFirewallSink sink // CIMTConFirewallSink object )  
---  
Python
AdminAPI.FirewallSubscribe( sink # IMTConFirewallSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConFirewallSink::OnFirewallSync](imtconfirewallsink_onfirewallsync.md "OnFirewallSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::FirewallUnsubscribe](imtadminapi_firewallunsubscribe.md "FirewallUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.