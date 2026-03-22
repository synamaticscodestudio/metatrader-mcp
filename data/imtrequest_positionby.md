# PositionBy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PositionBy | [](imtrequest_position.md "Position") [](imtrequest_positionexternalid.md "PositionExternalID") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PositionBy
Gets the ticket (a unique number) of an opposite trade position in the MetaTrader 5 platform.
C++
UINT64 IMTRequest::PositionBy() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.PositionBy()  
---  
Return Value
The ticket of an opposite position in the MetaTrader 5 platform.
Note
The method is used for Close By operations [EnTradeActions::TA_CLOSE_BY](imtrequest_enum.md "Enumerations") and [EnTradeActions::DEALER_CLOSE_BY](imtrequest_enum.md "Enumerations"). 
IMTRequest::PositionBy
Sets the ticket (a unique number) of an opposite trade position in the MetaTrader 5 platform.
C++
MTAPIRES IMTRequest::PositionBy( UINT64 position // The ticket of an opposite position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PositionBy( ulong position // The ticket of an opposite position )  
---  
Parameters
position
[in] The ticket of an opposite position in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is used for Close By operations [EnTradeActions::TA_CLOSE_BY](imtrequest_enum.md "Enumerations") and [EnTradeActions::DEALER_CLOSE_BY](imtrequest_enum.md "Enumerations"). 