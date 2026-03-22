# RequestCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestCreateArray | [](imtmanagerapi_requestcreate.md "RequestCreate") [](imtmanagerapi_requestsubscribe.md "RequestSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestCreateArray
Create an object of the array of trade requests.
C++
IMTRequestArray* IMTManagerAPI::RequestCreateArray()  
---  
.NET
CIMTRequestArray CIMTManagerAPI.RequestCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTRequestArray](imtrequestarray.md "IMTRequestArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequestArray::Release](imtrequestarray_release.md "Release") method of this object.