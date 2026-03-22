# PositionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionCreate | [](serverapi_trading_position.md "Positions") [](imtserverapi_positioncreatearray.md "PositionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionCreate
Create an object of a trade position.
IMTPosition* IMTServerAPI::PositionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPosition](imtposition.md "IMTPosition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTPosition::Release](imtposition_release.md "Release") method of this object.