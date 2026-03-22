# ApiDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ApiDataClear | [](imtposition_apidataget.md "ApiDataGet") [](imtposition_apidataclearall.md "ApiDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ApiDataClear
Clear all custom parameters of positions set by an application.
C++
MTAPIRES IMTPosition::ApiDataClear( const USHORT app_id // Application ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ApiDataClear( ushort app_id // Application ID )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all custom parameters of positions set by an application with the app_id ID.