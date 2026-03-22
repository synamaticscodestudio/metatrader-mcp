# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Assign | [](imtaccountarray_release.md "Release") [](imtaccountarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTAccountArray::Assign( const IMTAccountArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Assign( CIMTAccountArray  array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.