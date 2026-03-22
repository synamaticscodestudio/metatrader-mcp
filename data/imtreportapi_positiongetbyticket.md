# PositionGetByTicket (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Positions ](imtreportapi_position.md "Positions")/ PositionGetByTicket | [](imtreportapi_positionget.md "PositionGet") [](imtreportapi_positionselect.md "PositionSelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PositionGetByTicket
Get a trade position by the ticket.
MTAPIRES IMTReportAPI::PositionGetByTicket( const UINT64 ticket, // Position ticket IMTPosition* position // Position object )  
---  
Parameters
ticket
[in] The ticket of a position. Corresponds to [IMTPosition::Position](imtposition_position.md "Position").
position
[out] An object of a trade position. The position object must be first created using the [IMTReportAPI::PositionCreate](imtreportapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position with the specified ticket to the position object.
To get the positions, generation of an appropriate snapshot must be turned on in a report ([MTReportInfo::SNAPSHOT_POSITIONS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_POSITIONS_FULL](mtreportinfo.htm#ensnapshots)).