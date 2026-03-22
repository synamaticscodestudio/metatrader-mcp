# LoginsRangeShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeShift | [](imtconservertrade_loginsrangeclear.md "LoginsRangeClear") [](imtconservertrade_loginsrangetotal.md "LoginsRangeTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeShift
Move the range of [logins](reference_user.md "Users") in the list.
C++
MTAPIRES IMTConServerTrade::LoginsRangeShift( const UINT pos, // Position of the range const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeShift( uint pos, // Position of the range int shift // Shift )  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeShift( pos, # Position of the range shift # Shift )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.