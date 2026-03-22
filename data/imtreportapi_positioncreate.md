# PositionCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Positions ](imtreportapi_position.md "Positions")/ PositionCreate | [](imtreportapi_position.md "Positions") [](imtreportapi_positioncreatearray.md "PositionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PositionCreate
Create an object of a trade position.
IMTPosition* IMTReportAPI::PositionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPosition](imtposition.md "IMTPosition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTPosition::Release](imtposition_release.md "Release") method of this object.