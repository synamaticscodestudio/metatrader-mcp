# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Group | [](imtrequest_externalaccount.md "Account") [](imtrequest_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Group
Get the group of the client who has sent the request.
C++
LPCWSTR IMTRequest::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.Group()  
---  
Return Value
If successful, it returns a pointer to a string with the group of a user. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after the removal of the object (call of the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), a copy of it should be created.
The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the group name.