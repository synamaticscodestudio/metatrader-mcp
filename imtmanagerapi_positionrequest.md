# PositionRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionRequest | [](imtmanagerapi_positiongetbysymbol.md "PositionGetBySymbol") [](imtmanagerapi_positionrequestbygroup.md "PositionRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionRequest
Request from the server open positions by login.
C++
MTAPIRES IMTManagerAPI::PositionRequest( const UINT64 login, // User's login IMTPositionArray* positions // An object of the array of positions )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionRequest( ulong login, // User's login CIMTPositionArray positions // An object of the array of positions )  
---  
Python
ManagerAPI.PositionRequest( int login # User's login )  
---  
Parameters
login
[in] The login of a user.
positions
[out] An object of the array of trade positions. The position object must be first created using the [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the array of positions of a client with the specified login to the position object.
This method cannot be called from event handlers (any methods of IMT*Sink classes).