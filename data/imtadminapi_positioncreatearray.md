# PositionCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionCreateArray | [](imtadminapi_positioncreate.md "PositionCreate") [](imtadminapi_positionrequest.md "PositionRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionCreateArray
Create an object of the array of trade positions.
C++
IMTPositionArray* IMTAdminAPI::PositionCreateArray()  
---  
.NET
CIMTPositionArray CIMTAdminAPI.PositionCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPositionArray](imtpositionarray.md "IMTPositionArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAdminAPI::Release](imtpositionarray_release.md "Release") method of this object.