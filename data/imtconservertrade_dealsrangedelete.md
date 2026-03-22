# DealsRangeDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeDelete | [](imtconservertrade_dealsrangeupdate.md "DealsRangeUpdate") [](imtconservertrade_dealsrangeclear.md "DealsRangeClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeDelete
Deletes a range of [deals](trading_deal.md "Deals") at the specified index.
C++
MTAPIRES IMTConServerTrade::DealsRangeDelete( const UINT pos // Position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DealsRangeDelete( uint pos // Position of the range )  
---  
Python (Manager API)
MTConServerTrade.DealsRangeDelete( pos # Position of the ran )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.