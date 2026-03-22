# APIDataRawSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ APIDataRawSet | [](imtexecution_apidatanext.md "APIDataNext") [](imtexecution_apidatarawget.md "APIDataRawGet") |
| --- | --- | --- |
| --- | --- |

IMTExecution::APIDataRawSet
Set custom parameters for a trade execution as raw data (memory fragment).
C++
MTAPIREST IMTExecution::APIDataRawSet( const void* data, // Data const UINT datalen // Data size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.APIDataRawSet( byte[] data // Data )  
---  
Parameters
data
[in] A pointer to the data.
datalen
[in] Data size.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The amount of recorded data must not exceed the [IMTExecution::APIDataRawMax](imtexecution_apidatarawmax.md "APIDataRawMax") value.