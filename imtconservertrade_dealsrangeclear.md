# DealsRangeClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeClear | [](imtconservertrade_dealsrangedelete.md "DealsRangeDelete") [](imtconservertrade_dealsrangeshift.md "DealsRangeShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeClear
Clear the range of [deals](trading_deal.md "Deals").
C++
MTAPIRES IMTConServerTrade::DealsRangeClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DealsRangeClear()  
---  
Python (Manager API)
MTConServerTrade.DealsRangeClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of ranges of all the deals of the server.