# PositionGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Positions ](imtreportapi_position.md "Positions")/ PositionGet | [](imtreportapi_positioncreatearray.md "PositionCreateArray") [](imtreportapi_positiongetbyticket.md "PositionGetByTicket") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PositionGet
Get a trade position.
MTAPIRES IMTReportAPI::PositionGet( const UINT64 login, // User's login LPCWSTR symbol, // Symbol IMTPosition* position // Position object )  
---  
Parameters
login
[in] The login of a user whose position should be obtained.
symbol
[in] The symbol, for which you need to get a position.
position
[out] An object of a trade position. The position object must be first created using the [IMTReportAPI::PositionCreate](imtreportapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position of specified client and the specified symbol to the position object.
To get the positions, generation of an appropriate snapshot must be turned on in a report ([MTReportInfo::SNAPSHOT_POSITIONS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_POSITIONS_FULL](mtreportinfo.htm#ensnapshots)).
To get a position when using the hedging accounting system ([EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode)), use the [IMTReportAPI::PositionGetByTicket](imtreportapi_positiongetbyticket.md "PositionGetByTicket") method as a position in that case is identified by the ticket, not by the login and symbol.
IMTReportAPI::PositionGet
Get an array of positions by the login.
MTAPIRES IMTReportAPI::PositionGet( const UINT64 login, // User's login IMTPositionArray* position // An object of the array of positions )  
---  
Parameters
login
[in] The login of a user.
position
[out] An object of the array of trade positions. The position object must be first created using the [IMTReportAPI::PositionArrayCreate](imtreportapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the array of positions of a client with the specified login to the position object.
To get the positions, generation of an appropriate snapshot must be turned on in a report ([MTReportInfo::SNAPSHOT_POSITIONS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_POSITIONS_FULL](mtreportinfo.htm#ensnapshots)).