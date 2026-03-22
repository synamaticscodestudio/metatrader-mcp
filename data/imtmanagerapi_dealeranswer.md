# DealerAnswer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerAnswer | [](imtmanagerapi_dealerlock.md "DealerLock") [](imtmanagerapi_dealersend.md "DealerSend") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerAnswer
Respond to a trade request received for processing using the [IMTManagerAPI::DealerGet](imtmanagerapi_dealerget.md "DealerGet") or [IMTManagerAPI::DealerLock](imtmanagerapi_dealerlock.md "DealerLock") method.
C++
MTAPIRES IMTManagerAPI::DealerAnswer( IMTConfirm* confirm // An objet of trade request confirmation )  
---  
.NET
MTRetCode CIMTManagerAPI.DealerAnswer( CIMTConfirm confirm // An objet of trade request confirmation )  
---  
Python
MTManagerAPI.DealerAnswer( confirm # An objet of trade request confirmation )  
---  
Parameters
confirm
[in] Filled [object of the trade request confirmation](imtconfirm.md "IMTConfirm").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method can be used only after calling [IMTManagerAPI::DealerStart](imtmanagerapi_dealerstart.md "DealerStart").