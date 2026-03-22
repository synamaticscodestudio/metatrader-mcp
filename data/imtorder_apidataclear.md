# ApiDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ApiDataClear | [](imtorder_apidataget.md "ApiDataGet") [](imtorder_apidataclearall.md "ApiDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ApiDataClear
Clear all custom parameters of orders set by an application.
C++
MTAPIRES IMTOrder::ApiDataClear( const USHORT app_id // Application ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ApiDataClear( ushort app_id // Application ID )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all custom parameters of trade orders set by an application with the ID app_id.