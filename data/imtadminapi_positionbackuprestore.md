# PositionBackupRestore (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionBackupRestore | [](imtadminapi_positionbackuprequest.md "PositionBackupRequest") [](imtadminapi_positioncheck.md "PositionCheck") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionBackupRestore
Restore a position from a backup database.
C++
MTAPIRES IMTAdminAPI::PositionBackupRestore( IMTPosition* position // A position to restore )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionBackupRestore( CIMTPosition position // A position to restore )  
---  
Python
AdminAPI.PositionBackupRestore( MTPosition position # A position to restore )  
---  
Parameters
position
[in] An object of the position to restore.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Restored positions are not deleted from the backup copy When restoring a position, [deals](imtadminapi_trading_deal.md "Functions") that resulted in that position are not recovered.
Backup copies are snapshots of the database of positions at certain time moments.