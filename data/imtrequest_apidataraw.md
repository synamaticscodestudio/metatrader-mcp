# APIDataRaw (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ APIDataRaw | [](imtrequest_apidatanext.md "APIDataNext") [](imtrequest_apidatarawmax.md "APIDataRawMax") |
| --- | --- | --- |
| --- | --- |

IMTRequest::APIDataRaw
Get custom parameters of a trade request as raw data (memory fragment).
C++
LPVOID IMTRequest::APIDataRaw() const  
---  
.NET (Gateway/Manager API)
byte[] CIMTRequest.APIDataRaw()  
---  
Return Value
A pointer to the value.
Note
Use the standard memcpy function to record raw data. The amount of recorded data must not exceed the [IMTRequest::APIDataRawMax](imtrequest_apidatarawmax.md "APIDataRawMax") value.