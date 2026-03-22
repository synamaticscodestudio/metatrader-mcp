# DealStorage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ DealStorage | [](imtexecution_dealreason.md "DealReason") [](imtexecution_dealcommission.md "DealCommission") |
| --- | --- | --- |
| --- | --- |

IMTExecution::DealStorage
Getting the swap size of a deal conducted out as a result of trade execution.
C++
double IMTExecution::DealStorage() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.DealStorage()  
---  
Return Value
The swap size for a deal.
IMTExecution::DealStorage
Setting the swap size of a deal conducted out as a result of trade execution.
C++
MTAPIRES IMTExecution::DealStorage( const double storage // Swap )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.DealStorage( double storage // Swap )  
---  
Parameters
storage
[in] The swap size for a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If a trade execution results in a deal which opens or increases a position, the current swap in field [IMTPosition::Storage](imtposition_storage.md "Storage") will be increased by the swap size passed in the trade execution. 
The following rules apply to the deals that lead to a partial or full position closure:
  * If no swap is specified in the trade execution (IMTExecution::DealStorage was not called), then position swap decreases in proportion to the closed volume. For example, if a deal closes 0.5 lots of a one-lot position, only half of the lot is left.
  * If the swap is specified in the trade execution (method IMTExecution::DealStorage was called), the position swap is decreased by the value passed in Storage. The proportions to be closed relative on the total volume are not taken into account.
