# LoginSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ LoginSet | [](imtposition_login.md "Login") [](imtposition_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTPosition::LoginSet
Sets the login of the client, to whom the trade position belongs.
C++
UINT64 IMTPosition::LoginSet( const UINT64 login // Client login )  
---  
.NET (Gateway/Manager API)
ulong CIMTPosition.LoginSet( ulong login // Client login )  
---  
Parameters
login
[in] The login of the client to whom the trade position belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method should only be used for recovering databases of positions using the [IMTAdminAPI::PositionBackupRestore](imtadminapi_positionbackuprestore.md "PositionBackupRestore") method.
Do not use this method in any other functions, in which operations with client logins in positions are performed, especially in Sever API hooks. This may corrupt the database. This may corrupt the database.