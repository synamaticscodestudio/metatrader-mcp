# OrderID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ OrderID | [](imtconfirm_dealid.md "DealID") [](imtconfirm_positionexternalid.md "PositionExternalID") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::OrderID
Gets the number of an order in an external trading system.
C++
LPCWSTR IMTConfirm::OrderID() const  
---  
.NET (Gateway/Manager API)
string CIMTConfirm.OrderID()  
---  
Return Value
If successful, it returns a pointer to a string with the order number. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of [IMTConfirm](imtconfirm.md "IMTConfirm") object.
To use the line after the object removal (call of [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object), a copy of it should be created.
IMTConfirm::OrderID
Sets the number of an order in an external trading system.
C++
MTAPIRES IMTConfirm::OrderID( LPCWSTR order_id // Order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.OrderID( srting order_id // Order ticket )  
---  
Parameters
order_id
[in] The number of an order in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ticket length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.