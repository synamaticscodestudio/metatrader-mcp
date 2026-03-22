# PositionByExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PositionByExternalID | [](imtrequest_positionexternalid.md "PositionExternalID") [](imtrequest_reason.md "Reason") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PositionByExternalID
Gets the ticket (a unique number) of an opposite position in an external trading system.
C++
LPCWSTR IMTRequest::PositionByExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.PositionByExternalID()  
---  
Return Value
The ticket of an opposite position in an external trading system.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).
The IMTRequest::PositionByExternalID field should not be filled when forming a trade request. The field is filled by a trade server when it receives a request to close a position by an opposite one (to perform a Close By operation). In this case the field is filled with the [IMTPosition::ExternalID](imtposition_externalid.md "ExternalID") value of the opposite position.
IMTRequest::PositionByExternalID
Sets the ticket (a unique number) of an opposite position in an external trading system.
C++
MTAPIRES IMTRequest::PositionByExternalID( LPCWSTR id // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PositionByExternalID( string id // Position ticket )  
---  
Parameters
id
[in] The ticket of an opposite position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The IMTRequest::PositionByExternalID field should not be filled when forming a trade request. The field is filled by a trade server when it receives a request to close a position by an opposite one (to perform a Close By operation). In this case the field is filled with the [IMTPosition::ExternalID](imtposition_externalid.md "ExternalID") value of the opposite position.