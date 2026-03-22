# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Delete | [](imtrequestarray_addcopy.md "AddCopy") [](imtrequestarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Delete
Delete a trade request by its index.
C++
MTAPIRES IMTRequestArray::Delete( const UINT pos // Request position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Delete( uint pos // Request position )  
---  
Parameters
pos
[in] Position of a trade request in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by calling the [IMTRequest::Release](imtrequest_release.md "Release") method.