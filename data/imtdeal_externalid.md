# ExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ExternalID | [](imtdeal_dealset.md "DealSet") [](imtdeal_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ExternalID
Get the deal ID in external trading systems.
C++
LPCWSTR IMTDeal::ExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTDeal.ExternalID()  
---  
Python
MTDeal.ExternalID  
---  
Return Value
If successful, it returns a pointer to the string with the identifier. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDeal](imtdeal.md "IMTDeal") object.
In order to use the string after the object removal (call of the [IMTDeal::Release](imtdeal_release.md "Release") method of this object), a copy of it should be created.
IMTDeal::ExternalID
Set the ID of the deal in external trading systems.
C++
MTAPIRES IMTDeal::ExternalID( LPCWSTR  id // External ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ExternalID( string id // External ID )  
---  
Python
MTDeal.ExternalID  
---  
Parameters
id
[in] The ID of the deal in external trading systems.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the ID is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.