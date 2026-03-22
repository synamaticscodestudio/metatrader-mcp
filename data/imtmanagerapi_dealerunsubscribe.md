# DealerUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerUnsubscribe | [](imtmanagerapi_dealerconfirmcreate.md "DealerConfirmCreate") [](imtmanagerapi_dealerstart.md "DealerStart") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerUnsubscribe
Unsubscribe from waiting for results of trading operations executed by [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend") commands (by any manager).
C++
MTAPIRES IMTManagerAPI::DealerUnsubscribe( IMTDealerSink* sink // A pointer to the IMTDealerSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealerUnsubscribe( CIMTDealerSink sink // CIMTDealerSink object )  
---  
Python
ManagerAPI.DealerUnsubscribe( sink # MTDealerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDealerSink](imtdealersink.md "Dealer Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.