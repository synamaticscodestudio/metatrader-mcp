# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ UpdateCopy | [](imtrequestarray_update.md "Update") [](imtrequestarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::UpdateCopy
Change a trade request at the specified position of an array by copying the parameters of a passed object of a trade request.
C++
MTAPIRES IMTRequestArray::UpdateCopy( const UINT  pos, // Position const IMTRequest* request // An object of a trade request )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.UpdateCopy( uint  pos, // Position CIMTRequest  request // An object of a trade request )  
---  
Parameters
pos
[in] Position of a trade request in an array, starting with 0.
order
[in] An object of a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the request object into an object of a trade request at the specified position of an array.
Unlike [IMTRequestArray::Update](imtrequestarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the request object, but it is more resource-intensive, since an additional object is created.