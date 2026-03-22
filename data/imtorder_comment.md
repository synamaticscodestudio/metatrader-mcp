# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Comment | [](imtorder_positionbyid.md "PositionByID") [](imtorder_activationmode.md "ActivationMode") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Comment
Get a comment to an order.
C++
LPCWSTR IMTOrder::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTOrder.Comment()  
---  
Python
MTOrder.Comment  
---  
Return Value
If successful, it returns a pointer to a string with a comment to an order. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTOrder](imtorder.md "IMTOrder") object.
To use the string after the object removal (call of the [IMTOrder::Release](imtorder_release.md "Release") method of this object), a copy of it should be created.
IMTOrder::Comment
Set a comment to an order.
C++
MTAPIRES IMTOrder::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.Comment( string comment // Comment )  
---  
Python
MTOrder.Comment  
---  
Parameters
comment
[in] A comment to an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the comment is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.