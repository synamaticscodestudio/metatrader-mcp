# DealUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealUpdate | [](imtadminapi_dealaddbatcharray.md "DealAddBatchArray") [](imtadminapi_dealupdatebatch.md "DealUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealUpdate
Updates a deal.
C++
MTAPIRES IMTAdminAPI::DealUpdate( IMTDeal* deal // Deal object )  
---  
.NET
MTRetCode CIMTAdminAPI.DealUpdate( CIMTDeal deal // Deal object )  
---  
Python
AdminAPI.DealUpdate( deal # Deal object )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can be updated only from the applications that are connected to the same trade server where the deal was created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.