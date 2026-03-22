# Comment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Comment | [](imtecnhistoryfilling_provider.md "Provider") [](imtecnhistoryfillingarray.md "IMTECNFillingArray") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Comment
Get a comment to a filling order.
C++
LPCWSTR IMTECNHistoryFilling::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTECNHistoryFilling.Comment()  
---  
Return Value
A comment to a filling order.
Note
A pointer to the resulting string is valid for the [IMTECNMatching](imtecnmatching.md "IMTECNMatching") object lifetime.
To use the string after object deletion (by a call of the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method of this object), a copy of it should be created.
IMTECNHistoryFilling
Set a comment to a filling order.
C++
MTAPIRES IMTECNHistoryFilling::Comment( LPCWSTR comment // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Comment( string comment // identifier )  
---  
Parameters
comment
[in] A comment to a filling order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The symbol name length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.