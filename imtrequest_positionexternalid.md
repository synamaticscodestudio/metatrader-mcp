# PositionExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PositionExternalID | [](imtrequest_positionby.md "PositionBy") [](imtrequest_positionbyexternalid.md "PositionByExternalID") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PositionExternalID
Gets the ticket (a unique number) of a position in an external trading system.
C++
LPCWSTR IMTRequest::PositionExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.PositionExternalID()  
---  
Return Value
The ticket of a position in an external trading system.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
The IMTRequest::PositionExternalID field should not be filled when forming a trade request. This field is filled by a trade server:
  * When a dealer confirms a trade request to open a new position. In this case the field is filled with a value of [IMTConfirm::PositionExternalID](imtconfirm_orderid.md "OrderID").
  * When the server receives a request to modify\close an existing position. In this case the field is filled with the [IMTPosition::ExternalID](imtposition_externalid.md "ExternalID") value of the appropriate position.

IMTRequest::PositionExternalID
Sets the ticket (a unique number) of a position in an external trading system.
C++
MTAPIRES IMTRequest::PositionExternalID( LPCWSTR id // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PositionExternalID( string id // Position ticket )  
---  
Parameters
id
[in] The ticket of a position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The IMTRequest::PositionExternalID field should not be filled when forming a trade request. This field is filled by a trade server:
  * When a dealer confirms a trade request to open a new position. In this case the field is filled with a value of [IMTConfirm::PositionExternalID](imtconfirm_orderid.md "OrderID").
  * When the server receives a request to modify\close an existing position. In this case the field is filled with the [IMTPosition::ExternalID](imtposition_externalid.md "ExternalID") value of the appropriate position.
