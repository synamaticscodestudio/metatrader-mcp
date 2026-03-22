# DealBackupRestore (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealBackupRestore | [](imtadminapi_dealbackuprequest.md "DealBackupRequest") [](imtadminapi_dealperform.md "DealPerform") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealBackupRestore
Recover a deal from a backup database.
C++
MTAPIRES IMTAdminAPI::DealBackupRestore( IMTDeal* deal // A deal to recover )  
---  
.NET
MTRetCode CIMTAdminAPI.DealBackupRestore( CIMTDeal deal // A deal to recover )  
---  
Python
AdminAPI.DealBackupRestore( MTDeal  deal # A deal to recover )  
---  
Parameters
deal
[in] An object of the deal to recover.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Recovered deals are not deleted from the backup copy.