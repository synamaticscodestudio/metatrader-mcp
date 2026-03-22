# DealUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealUpdate | [](imtmanagerapi_dealaddbatcharray.md "DealAddBatchArray") [](imtmanagerapi_dealupdatebatch.md "DealUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealUpdate
Updates a deal.
C++
MTAPIRES IMTManagerAPI::DealUpdate( IMTDeal* deal // Deal object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealUpdate( CIMTDeal deal // Deal object )  
---  
Python
ManagerAPI.DealUpdate( deal # Deal object )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can only be updated from the applications connected to the trade server, on which the deal has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.