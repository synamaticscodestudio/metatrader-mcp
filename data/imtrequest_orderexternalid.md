# OrderExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ OrderExternalID | [](imtrequest_order.md "Order") [](imtrequest_partyid.md "PartyID") |
| --- | --- | --- |
| --- | --- |

IMTRequest::OrderExternalID
Get the order ID in external trading systems.
C++
LPCWSTR IMTRequest::OrderExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.OrderExternalID()  
---  
Return Value
If successful, it returns a pointer to the string with the identifier. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
The IMTRequest::OrderExternalID field should not be filled when forming a trade request. This field is filled by a trade server:
  * When a dealer confirms a trade request to open a new order (a market or a pending order). In this case the field is filled with a value of [IMTConfirm::OrderID](imtconfirm_orderid.md "OrderID").
  * When the server receives a request to modify\delete\execute an existing order. In this case the field is filled with a value of [IMTOrder::ExternalID](imtorder_externalid.md "ExternalID").

IMTRequest::OrderExternalID
Set the order ID in external trading systems.
C++
MTAPIRES IMTRequest::OrderExternalID( LPCWSTR id // External ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.OrderExternalID( string id // External ID )  
---  
Parameters
id
[in] The order ID in external systems.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The IMTRequest::OrderExternalID field should not be filled when forming a trade request. This field is filled by a trade server:
  * When a dealer confirms a trade request to open a new order (a market or a pending order). In this case the field is filled with a value of [IMTConfirm::OrderID](imtconfirm_orderid.md "OrderID").
  * When the server receives a request to modify\delete\execute an existing order. In this case the field is filled with a value of [IMTOrder::ExternalID](imtorder_externalid.md "ExternalID").
