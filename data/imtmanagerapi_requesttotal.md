# RequestTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestTotal | [](imtmanagerapi_requestunsubscribe.md "RequestUnsubscribe") [](imtmanagerapi_requestnext.md "RequestNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestTotal
Get the total amount of trade requests in a requests queue.
C++
UINT IMTManagerAPI::RequestTotal()  
---  
.NET
uint CIMTManagerAPI.RequestTotal()  
---  
Python
ManagerAPI.RequestTotal()  
---  
Return Value
Total amount of trade requests in a requests queue.
Note
To use this method, you must first call [IMTManagerAPI::DealerStart](imtmanagerapi_dealerstart.md "DealerStart").