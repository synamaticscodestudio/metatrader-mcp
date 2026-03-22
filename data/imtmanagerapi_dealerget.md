# DealerGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerGet | [](imtmanagerapi_dealerstop.md "DealerStop") [](imtmanagerapi_dealerlock.md "DealerLock") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerGet
Get the first request in the queue of requests for processing.
C++
MTAPIRES IMTManagerAPI::DealerGet( IMTRequest* request // An object of a trade request )  
---  
.NET
MTRetCode CIMTManagerAPI.DealerGet( CIMTRequest request // An object of a trade request )  
---  
Python
MTManagerAPI.DealerGet()  
---  
Parameters
request
[out] An object of a trade request. The object must first be created using the [IMTManagerAPI::RequestCreate](imtmanagerapi_requestcreate.md "RequestCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method can be used only after calling [IMTManagerAPI::DealerStart](imtmanagerapi_dealerstart.md "DealerStart").
The request obtained with this method is marked by the server as a request passed to a certain manager for processing, which prevents passing the same request to another manager. hen the server waits till the request is processed using the [IMTManagerAPI::DealerAnswer](imtmanagerapi_dealeranswer.md "DealerAnswer") method.
A request received for processing must necessarily be processed, otherwise it will be lost (requests are not returned to the queue). A captured request cannot be returned to the queue.