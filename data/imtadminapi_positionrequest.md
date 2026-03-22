# PositionRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionRequest | [](imtadminapi_positioncreatearray.md "PositionCreateArray") [](imtadminapi_positionrequestbygroup.md "PositionRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionRequest
Request from the server open positions by login.
C++
MTAPIRES IMTAdminAPI::PositionRequest( const UINT64 login, // User's login IMTPositionArray* positions // An object of the array of positions )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionRequest( ulong login, // User's login CIMTPositionArray positions // An object of the array of positions )  
---  
Python
AdminAPI.PositionRequest( int login # User's login )  
---  
Parameters
login
[in] The login of a user.
positions
[out] An object of the array of trade positions. The position object must be first created using the [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the array of positions of a client with the specified login to the position object.