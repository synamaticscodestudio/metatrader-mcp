# DealerAnswer (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerAnswer | [](imtserverapi_dealerlock.md "DealerLock") [](imtserverapi_dealerexecution.md "DealerExecution") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerAnswer
A response to a trade request, which [IMTServerAPI::DealerGet](imtserverapi_dealerget.md "DealerGet") or [IMTServerAPI::DealerLock](imtserverapi_dealerlock.md "DealerLock") has received for processing.
MTAPIRES IMTServerAPI::DealerAnswer( const UINT64 dealer, // Dealer's login IMTConfirm* confirm // Trade request confirmation object )  
---  
Parameters
dealer
[in] The login of the manager account, on whose behalf the request is processed. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
confirm
[in] The filled [trade request confirmation object](imtconfirm.md "IMTConfirm").
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method can only be used after a call of [IMTServerAPI::DealerStart](imtserverapi_dealerstart.md "DealerStart") for the appropriate manager account.