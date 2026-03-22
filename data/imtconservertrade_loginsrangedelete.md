# LoginsRangeDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ LoginsRangeDelete | [](imtconservertrade_loginsrangeupdate.md "LoginsRangeUpdate") [](imtconservertrade_loginsrangeclear.md "LoginsRangeClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::LoginsRangeDelete
Delete a range of [logins](reference_user.md "Users") by the index.
C++
MTAPIRES IMTConServerTrade::LoginsRangeDelete( const UINT pos // Position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.LoginsRangeDelete( uint pos // Position of the range )  
---  
Python (Manager API)
MTConServerTrade.LoginsRangeDelete( pos # Position of the range )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.