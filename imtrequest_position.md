# Position (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Position | [](imtrequest_sourcelogin.md "SourceLogin") [](imtrequest_positionby.md "PositionBy") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Position
Gets the ticket (a unique number) of a trade position in the MetaTrader 5 platform.
C++
UINT64 IMTRequest::Position() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.Position()  
---  
Return Value
The ticket of a position in the MetaTrader 5 platform.
IMTRequest::Position
Sets the ticket (a unique number) of a trade position in the MetaTrader 5 platform.
C++
MTAPIRES IMTRequest::Position( UINT64 position // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Position( ulong position // Position ticket )  
---  
Parameters
position
[in] The ticket of a trade position in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The position ticket must be specified if the account supports the hedging option.