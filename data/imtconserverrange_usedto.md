# UsedTo (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerRange ](imtconserverrange.md "IMTConServerRange")/ UsedTo | [](imtconserverrange_usedfrom.md "UsedFrom") [](imtconserveraddressrange.md "IMTConServerAddressRange") |
| --- | --- | --- |
| --- | --- |

IMTConServerRange::UsedTo
Get the end of the range of accounts, orders or deals already used on a trade server.
C++
UINT64 IMTConServerRange::UsedTo() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServerRange.UsedTo()  
---  
Python (Manager API)
MTConServerRange.UsedTo  
---  
Return Value
The end of the range of accounts, orders or deals already used on a trade server.
Note
The range information is updated in the configuration once an hour.