# PositionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionCreate | [](imtadminapi_trading_position.md "Functions") [](imtadminapi_positioncreatearray.md "PositionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionCreate
Create an object of a trade position.
C++
IMTPosition* IMTAdminAPI::PositionCreate()  
---  
.NET
CIMTPosition CIMTAdminAPI.PositionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPosition](imtposition.md "IMTPosition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTPosition::Release](imtposition_release.md "Release") method of this object.