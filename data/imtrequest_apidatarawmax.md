# APIDataRawMax (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ APIDataRawMax | [](imtrequest_apidataraw.md "APIDataRaw") [](imtrequest_apidataclear.md "ApiDataClear") |
| --- | --- | --- |
| --- | --- |

IMTRequest::APIDataRawMax
Get the maximum possible size of custom parameters of a trade request.
C++
UINT IMTRequest::APIDataRawMax() const  
---  
.NET (Gateway/Manager API)
uint CIMTRequest.APIDataRawMax()  
---  
Return Value
the maximum possible size of custom parameters of a trade request in bytes.
Note
Use this method when reading and writing custom parameters in a raw form via [IMTRequest::APIDataRaw](imtrequest_apidataraw.md "APIDataRaw").