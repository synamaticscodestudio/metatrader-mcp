# DealBackupRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealBackupRequest | [](imtadminapi_dealbackuplist.md "DealBackupList") [](imtadminapi_dealbackuprestore.md "DealBackupRestore") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealBackupRequest
Request a deal from a backup database.
C++
MTAPIRES IMTAdminAPI::DealBackupRequest( const INT64 backup, // Backup date const UINT64 ticket, // Deal number IMTDeal* deal // An object of a deal )  
---  
.NET
MTRetCode CIMTAdminAPI.DealBackupRequest( long backup, // Backup date ulong ticket, // Deal number CIMTDeal deal // An object of a deal )  
---  
Python
AdminAPI.DealBackupRequest( backup, # Backup date ticket # Deal number )  
---  
Parameters
backup
[in] The date of creation of the backup to which the requested deal belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::DealBackupList](imtadminapi_dealbackuplist.md "DealBackupList") method.
ticket
[in] Deal number.
deal
[out] An object of a deal. The deal object must be first created using the [IMTAdminAPI::DealCreate](imtadminapi_dealcreate.md "DealCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTAdminAPI::DealBackupRequest
Request an array of deals from a backup database.
C++
MTAPIRES IMTAdminAPI::DealBackupRequest( const INT64 backup, // Backup date const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTDealArray* deals // An object of the array of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.DealBackupRequest( long backup, // Backup date ulong login, // Login long from, // Beginning of period long to, // End of period CIMTDealArray deals // An object of the array of deals )  
---  
Python
AdminAPI.DealBackupRequest( backup, # Backup date login, # Login from, # Beginning of period to # End of period )  
---  
Parameters
backup
[in] The date of creation of the backup to which the requested deal belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::DealBackupList](imtadminapi_dealbackuplist.md "DealBackupList") method.
login
[in] The login of a user whose deals we want to obtain.
from
[in] The beginning of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
deals
[out] An object of the array of deals. The deals object must be first created using the [IMTAdminAPI::DealCreateArray](imtadminapi_dealcreatearray.md "DealCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTAdminAPI::DealBackupRequest
Request a deal from a backup database from the specified server.
C++
MTAPIRES IMTAdminAPI::DealBackupRequest( const UINT64  server, // Server ID const INT64 backup, // Backup date const UINT64 ticket, // Deal number IMTDeal* deal // An object of a deal )  
---  
.NET
MTRetCode CIMTAdminAPI.DealBackupRequest( ulong  server, // Server ID long backup, // Backup date ulong ticket, // Deal number CIMTDeal deal // An object of a deal )  
---  
Python
AdminAPI.DealBackupRequest( server, # Server ID backup, # Backup date ticket # Deal number )  
---  
Parameters
server
[in] The identifier of the server from which the information should be requested.
backup
[in] The date of creation of the backup to which the requested deal belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::DealBackupList](imtadminapi_dealbackuplist.md "DealBackupList") method.
ticket
[in] Deal number.
deal
[out] An object of a deal. The deal object must be first created using the [IMTAdminAPI::DealCreate](imtadminapi_dealcreate.md "DealCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTAdminAPI::DealBackupRequest
Request an array of deals from a backup database from the specified server.
C++
MTAPIRES IMTAdminAPI::DealBackupRequest( const UINT64 server, // Server ID const INT64 backup, // Backup date const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTDealArray* deals // An object of the array of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.DealBackupRequest( ulong server, // Server ID long backup, // Backup date ulong login, // Login long from, // Beginning of period long to, // End of period CIMTDealArray deals // An object of the array of deals )  
---  
Python
AdminAPI.DealBackupRequest( server, # Server ID backup, # Backup date login, # Login from, # Beginning of period to # End of period )  
---  
Parameters
server
[in] The identifier of the server from which the information should be requested.
backup
[in] The date of creation of the backup to which the requested deal belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::DealBackupList](imtadminapi_dealbackuplist.md "DealBackupList") method.
login
[in] The login of a user whose deals we want to obtain.
from
[in] The beginning of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
deals
[out] An object of the array of deals. The deals object must be first created using the [IMTAdminAPI::DealCreateArray](imtadminapi_dealcreatearray.md "DealCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).