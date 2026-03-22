# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Assign | [](imtrequest_release.md "Release") [](imtrequest_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTRequest::Assign( const IMTRequest* request // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Assign( CIMTRequest request // Source object )  
---  
Parameters
request
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.