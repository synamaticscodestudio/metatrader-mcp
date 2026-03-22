# LoginsRangeAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeAdd | [](imtconservertrade_overmonthtimeprev.md "OvermonthTimePrev") [](imtconservertrade_loginsrangeupdate.md "LoginsRangeUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeAdd
Add a range of [logins](reference_user.md "Users").
C++
MTAPIRES IMTConServerTrade::LoginsRangeAdd( IMTConServerRange* range // Range object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeAdd( CIMTConServerRange range // Range object )  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeAdd( range # Range object )  
---  
Parameters
range
[in] An object of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.