# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Assign | [](imtconfirm_release.md "Release") [](imtconfirm_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConfirm::Assign( const IMTConfirm* confirm // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Assign( CIMTConfirm  confirm // Source object )  
---  
Parameters
confirm
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.