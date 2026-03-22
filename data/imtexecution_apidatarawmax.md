# APIDataRawMax (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ APIDataRawMax | [](imtexecution_apidatarawget.md "APIDataRawGet") [](imtexecution_apidataclear.md "ApiDataClear") |
| --- | --- | --- |
| --- | --- |

IMTExecution::APIDataRawMax
Get the maximum possible size of custom parameters of a trade execution.
C++
UINT IMTExecution::APIDataRawMax() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.APIDataRawMax()  
---  
Return Value
the maximum possible size of custom parameters of a trade request in bytes.
Note
Use this method when reading and writing custom parameters in a raw form via [IMTExecution::APIDataRawGet](imtexecution_apidatarawget.md "APIDataRawGet") and [IMTExecution::APIDataRawSet](imtexecution_apidatarawset.md "APIDataRawSet").