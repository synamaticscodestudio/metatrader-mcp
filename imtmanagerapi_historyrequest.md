# HistoryRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ HistoryRequest | [](imtmanagerapi_ordercancelbatch.md "OrderCancelBatch") [](imtmanagerapi_historyrequestbygroup.md "HistoryRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HistoryRequest
Request from the server the client's closed orders (history) in the specified date range.
C++
MTAPIRES IMTManagerAPI::HistoryRequest( const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTOrderArray* orders // Array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.HistoryRequest( ulong login, // Login long from, // Beginning of period long to, // End of period CIMTOrderArray orders // Array of orders )  
---  
Python
ManagerAPI.HistoryRequest( login, # Login from, # Beginning of period to # End of period )  
---  
Parameters
login
[in] The login of the client, whose orders you need to get.
from
[in] The beginning of the period you want to receive orders for. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get orders. The date is specified in seconds that have elapsed since 01.01.1970.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
The method was previously called OrderRequestHistory.