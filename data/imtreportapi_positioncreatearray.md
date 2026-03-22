# PositionCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Positions ](imtreportapi_position.md "Positions")/ PositionCreateArray | [](imtreportapi_positioncreate.md "PositionCreate") [](imtreportapi_positionget.md "PositionGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PositionCreateArray
Create an object of the array of trade positions.
IMTPositionArray* IMTReportAPI::PositionCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTPositionArray](imtpositionarray.md "IMTPositionArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTPositionArray::Release](imtpositionarray_release.md "Release") method of this object.