# ApiDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ApiDataClear | [](imtdeal_apidataget.md "ApiDataGet") [](imtdeal_apidataclearall.md "ApiDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ApiDataClear
Clears all custom parameters of deals set by an application.
C++
MTAPIRES IMTDeal::ApiDataClear( const USHORT app_id // Application ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ApiDataClear( ushort app_id // Application ID )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all custom parameters of deals set by an application with the app_id ID.