# IP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ IP | [](imtrequest_idclient.md "IDClient") [](imtrequest_sourcelogin.md "SourceLogin") |
| --- | --- | --- |
| --- | --- |

IMTRequest::IP
Gets the IP address from which the request has been sent.
C++
LPCWSTR IMTRequest::IP() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.IP()  
---  
Return Value
The IP address from which the request has been sent.
IMTRequest::IP
Sets the IP address from which the request has been sent.
C++
MTAPIRES IMTRequest::IP( LPCWSTR ip // IP address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.IP( string ip // IP address )  
---  
Parameters
ip
[in] The IP address from which the request has been sent.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
When sending requests via Manager API, the specified IP value is ignored. The server replaces it with the actual address the request was sent from. Setting the property only makes sense for requests sent via Server API, since they are all sent from a plugin that is physically located on the server.