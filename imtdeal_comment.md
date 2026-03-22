# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Comment | [](imtdeal_positionid.md "PositionID") [](imtdeal_apidataset.md "ApiDataSet") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Comment
Get a comment to a deal.
C++
LPCWSTR IMTDeal::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTDeal.Comment()  
---  
Python
MTDeal.Comment  
---  
Return Value
If successful, it returns a pointer to a string with a comment to a deal. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDeal](imtdeal.md "IMTDeal") object.
In order to use the string after the object removal (call of the [IMTDeal::Release](imtdeal_release.md "Release") method of this object), a copy of it should be created.
IMTDeal::Comment
Set a comment to a deal.
C++
MTAPIRES IMTDeal::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Comment( string comment // Comment )  
---  
Python
MTDeal.Comment  
---  
Parameters
comment
[in] A comment to the deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the comment is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.