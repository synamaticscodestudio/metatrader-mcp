# PositionExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ PositionExternalID | [](imtconfirm_orderid.md "OrderID") [](imtconfirm_pricegateway.md "PriceGateway") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::PositionExternalID
Gets the ticket (a unique number) of a position in an external trading system.
C++
LPCWSTR IMTConfirm::PositionExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTConfirm.PositionExternalID()  
---  
Return Value
The ticket of a position in an external trading system.
Note
The pointer to the resulting string is valid for the lifetime of [IMTConfirm](imtconfirm.md "IMTConfirm") object.
To use the line after the object removal (call of [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object), a copy of it should be created.
IMTConfirm::PositionExternalID
Sets the ticket (a unique number) of a position in an external trading system.
C++
MTAPIRES IMTConfirm::PositionExternalID( LPCWSTR id // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.PositionExternalID( string id // Position ticket )  
---  
Parameters
id
[in] The ticket of a position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.