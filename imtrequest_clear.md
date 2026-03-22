# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Clear | [](imtrequest_assign.md "Assign") [](imtrequest_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Clear
Clear an object.
C++
MTAPIRES IMTRequest::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.