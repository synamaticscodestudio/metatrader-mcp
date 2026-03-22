# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ Clear | [](imtconservertrade_assign.md "Assign") [](imtconservertrade_demomode.md "DemoMode") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::Clear
Clear an object.
C++
MTAPIRES IMTConServerTrade::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.