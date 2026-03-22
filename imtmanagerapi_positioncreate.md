# PositionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionCreate | [](imtmanagerapi_trading_position.md "Positions") [](imtmanagerapi_positioncreatearray.md "PositionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionCreate
Create an object of a trade position.
C++
IMTPosition* IMTManagerAPI::PositionCreate()  
---  
.NET
CIMTPosition CIMTManagerAPI.PositionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPosition](imtposition.md "IMTPosition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTPosition::Release](imtposition_release.md "Release") method of this object.