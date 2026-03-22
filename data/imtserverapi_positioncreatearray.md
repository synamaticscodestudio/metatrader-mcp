# PositionCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionCreateArray | [](imtserverapi_positioncreate.md "PositionCreate") [](imtserverapi_positionsubscribe.md "PositionSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionCreateArray
Create an object of the array of trade positions.
IMTPositionArray* IMTServerAPI::PositionCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPositionArray](imtpositionarray.md "IMTPositionArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTPositionArray::Release](imtpositionarray_release.md "Release") method of this object.