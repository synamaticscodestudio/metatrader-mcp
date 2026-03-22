# DealID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ DealID | [](imtconfirm_flags.md "Flags") [](imtconfirm_orderid.md "OrderID") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::DealID
Gets a deal ID in an external trading system.
C++
LPCWSTR IMTConfirm::DealID() const  
---  
.NET (Gateway/Manager API)
string CIMTConfirm.DealID()  
---  
Return Value
If successful, it returns a pointer to the string with the deal identifier. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTConfirm](imtconfirm.md "IMTConfirm") object.
To use the line after the object removal (call of [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object), a copy of it should be created.
IMTConfirm::DealID
Sets the ID of a deal in an external trading system.
C++
MTAPIRES IMTConfirm::DealID( LPCWSTR deal_id Deal ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.DealID( string deal_id Deal ticket )  
---  
Parameters
deal_id
[in] The ID of a deal in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ticket length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.