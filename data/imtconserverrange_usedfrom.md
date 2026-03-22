# UsedFrom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerRange ](imtconserverrange.md "IMTConServerRange")/ UsedFrom | [](imtconserverrange_to.md "To") [](imtconserverrange_usedto.md "UsedTo") |
| --- | --- | --- |
| --- | --- |

IMTConServerRange::UsedFrom
Get the beginning of the range of accounts, orders or deals already used on a trade server.
C++
UINT64 IMTConServerRange::UsedFrom() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServerRange.UsedFrom()  
---  
Python (Manager API)
MTConServerRange.UsedFrom  
---  
Return Value
The beginning of the range of accounts, orders or deals already used on a trade server.
Note
The range information is updated in the configuration once an hour.