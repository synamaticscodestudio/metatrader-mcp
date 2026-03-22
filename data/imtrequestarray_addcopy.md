# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ AddCopy | [](imtrequestarray_add.md "Add") [](imtrequestarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::AddCopy
Add a copy of an object of a trade request at the end of an array.
C++
MTAPIRES IMTRequestArray::AddCopy( const IMTRequest* request // Added request )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.AddCopy( CIMTRequest  request // Added request )  
---  
Parameters
request
[in] An object of a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the request object and places it at the end of the array.
Unlike [IMTRequestArray::Add(IMTRequest* request)](imtrequestarray_add.md "Add"), calling this method does not set any additional conditions for the control of the request object, but it is more resource-intensive, since an additional object is created.
IMTRequestArray::AddCopy
Add copies of the objects of trade requests in an array.
C++
MTAPIRES IMTRequestArray::AddCopy( const IMTRequestArray* array // The array of requests that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.AddCopy( CIMTRequestArray array // The array of requests that is being added )  
---  
Parameters
array
[in] An object of the array of requests.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the objects of requests belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTRequestArray::Add(IMTRequestArray* array)](imtrequestarray_add.md "Add"), calling this method does not change the source array object, but it is more resource-intensive, since additional objects are created.