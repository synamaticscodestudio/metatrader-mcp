# PositionFix (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionFix | [](imtadminapi_positioncheck.md "PositionCheck") [](imtadminapi_positionsplit.md "PositionSplit") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionFix
Correcting a client's positions based on the history of his deals.
C++
MTAPIRES IMTAdminAPI::PositionFix( const UINT64 login, // The user's login IMTPositionArray* current // Client's positions after correction )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionFix( ulong login, // The user's login CIMTPositionArray current // Client's positions after correction )  
---  
Python
AdminAPI.PositionFix( int login # The user's login )  
---  
Parameters
login
[in] The login of a user.
current
[out] The array of the client's positions after correction based on the history. The 'current' object must be first created using the [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Disclaimer
Upon the call of the method, the platform calculates a client's positions based on the history of his deals, and corrects current positions if necessary.