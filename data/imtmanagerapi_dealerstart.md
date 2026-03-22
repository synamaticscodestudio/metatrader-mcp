# DealerStart (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerStart | [](imtmanagerapi_dealerunsubscribe.md "DealerUnsubscribe") [](imtmanagerapi_dealerstop.md "DealerStop") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerStart
Start dealing.
C++
MTAPIRES IMTManagerAPI::DealerStart()  
---  
.NET
MTRetCode CIMTManagerAPI.DealerStart()  
---  
Python
ManagerAPI.DealerStart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After the execution of this method, the queue of trade requests will be loaded to the application, and [events associated with trade requests](imtrequestsink.md "IMTRequestSink") (OnRequestAdd, OnRequestUpdate, OnRequestDelete and OnRequestSync) will start arriving.