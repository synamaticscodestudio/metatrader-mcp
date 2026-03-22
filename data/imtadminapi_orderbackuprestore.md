# OrderBackupRestore (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderBackupRestore | [](imtadminapi_orderbackuprequesthistory.md "OrderBackupRequestHistory") [](imtadminapi_orderreopen.md "OrderReopen") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderBackupRestore
Restore an order from a backup database.
C++
MTAPIRES IMTAdminAPI::OrderBackupRestore( IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderBackupRestore( CIMTOrder order // An order object )  
---  
Python
MTAdminAPI.OrderBackupRestore( MTOrder order # An order object )  
---  
Parameters
order
[in] An object of the order to restore.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Restored orders are not deleted from the backup copy.