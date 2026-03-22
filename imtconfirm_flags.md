# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Flags | [](imtconfirm_comment.md "Comment") [](imtconfirm_dealid.md "DealID") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Flags
Get the current options of conformation of trade requests.
C++
UINT IMTConfirm::Flags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConfirm.Flags()  
---  
Return Value
A value of the [IMTConfirm::EnConfirmFlags](imtconfirm_enum.htm#enconfirmflags) enumeration.
IMTConfirm::Flags
Set the options of conformation of trade requests.
C++
MTAPIRES IMTConfirm::Flags( const UINT flags // Options )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Flags( uint flags // Options )  
---  
Parameters
flags
[in] Options of conformation of trade requests. To pass the options, the [IMTConfirmn::EnConfirmFlags](imtconfirm_enum.htm#enconfirmflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.