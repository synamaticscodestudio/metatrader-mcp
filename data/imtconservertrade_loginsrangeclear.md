# LoginsRangeClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeClear | [](imtconservertrade_loginsrangedelete.md "LoginsRangeDelete") [](imtconservertrade_loginsrangeshift.md "LoginsRangeShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeClear
Clear the range of [logins](reference_user.md "Users").
C++
MTAPIRES IMTConServerTrade::LoginsRangeClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeClear()  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of ranges of all the logins of the server.