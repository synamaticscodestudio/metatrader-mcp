# RequestCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestCreate | [](imtmanagerapi_trading_request.md "Trade Requests") [](imtmanagerapi_requestcreatearray.md "RequestCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestCreate
Create an object of a trade request.
C++
IMTRequest* IMTManagerAPI::RequestCreate()  
---  
.NET
CIMTRequest CIMTManagerAPI.RequestCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTRequest](imtrequest.md "IMTRequest") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequest::Release](imtrequest_release.md "Release") method of this object.