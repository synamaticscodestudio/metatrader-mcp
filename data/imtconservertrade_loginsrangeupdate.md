# LoginsRangeUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeUpdate | [](imtconservertrade_loginsrangeadd.md "LoginsRangeAdd") [](imtconservertrade_loginsrangedelete.md "LoginsRangeDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeUpdate
Update the range of [logins](reference_user.md "Users").
C++
MTAPIRES IMTConServerTrade::LoginsRangeUpdate( const UINT pos, // Position of the range IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeUpdate( uint  pos, // Position of the range CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeUpdate( pos, # Position of the range range # Range object )  
---  
Parameters
pos
[in] Position of the range of logins in the list, starting with 0.
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.