# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ Assign | [](imtconservertrade_release.md "Release") [](imtconservertrade_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerTrade::Assign( const IMTConServerTrade* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.Assign( CIMTConServerTrade param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.