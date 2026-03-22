# OrderBackupRequestOpen (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderBackupRequestOpen | [](imtadminapi_orderbackuprequest.md "OrderBackupRequest") [](imtadminapi_orderbackuprequesthistory.md "OrderBackupRequestHistory") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderBackupRequestOpen
Request open orders from a backup database.
C++
MTAPIRES IMTAdminAPI::OrderBackupRequestOpen( const INT64 backup, // Backup date const UINT64 login, // Login IMTOrderArray* orders // An object of the array of orders )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderBackupRequestOpen( long backup, // Backup date ulong login, // Login CIMTOrderArray orders // An object of the array of orders )  
---  
Python
AdminAPI.OrderBackupRequestOpen( backup, # Backup date login # Login )  
---  
Parameters
backup
[in] The date of creation of the backup to which the requested order belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::OrderBackupList](imtadminapi_orderbackuplist.md "OrderBackupList") method.
login
[in] The login of the client, whose open orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTAdminAPI::OrderBackupRequestOpen
Request open orders from a backup database of the specified server.
C++
MTAPIRES IMTAdminAPI::OrderBackupRequestOpen( const UINT64 server, // Server ID const INT64 backup, // Backup date const UINT64 login, // Login IMTOrderArray* orders // An object of the array of orders )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderBackupRequestOpen( ulong server, // Server ID long backup, // Backup date ulong login, // Login CIMTOrderArray orders // An object of the array of orders )  
---  
Python
AdminAPI.OrderBackupRequestOpen( server, # Server ID backup, # Backup date login # Login )  
---  
Parameters
server
[in] The identifier of the server from which the information should be requested.
backup
[in] The date of creation of the backup to which the requested order belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::OrderBackupList](imtadminapi_orderbackuplist.md "OrderBackupList") method.
login
[in] The login of the client, whose open orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).