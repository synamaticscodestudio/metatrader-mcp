# PositionCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionCreateArray | [](imtmanagerapi_positioncreate.md "PositionCreate") [](imtmanagerapi_positionsubscribe.md "PositionSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionCreateArray
Create an object of the array of trade positions.
C++
IMTPositionArray* IMTManagerAPI::PositionCreateArray()  
---  
.NET
CIMTPositionArray CIMTManagerAPI.PositionCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPositionArray](imtpositionarray.md "IMTPositionArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTPositionArray::Release](imtposition_release.md "Release") method of this object.