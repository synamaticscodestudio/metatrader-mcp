# Retcode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Retcode | [](imtconfirm_id.md "ID") [](imtconfirm_volume.md "Volume") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Retcode
Get the confirmation return code.
C++
MTAPIRES IMTConfirm::Retcode() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Retcode()  
---  
Return Value
A value of the [EnMTAPIRetcode](reference_retcodes.md "Return Codes") enumeration.
IMTConfirm::Retcode
Set the return code in the confirmation.
C++
MTAPIRES IMTConfirm::Retcode( const MTAPIRES retcode // Return code )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Retcode( MTRetCode retcode // Return code )  
---  
Parameters
retcode
[in] Return code. To pass the code, the [EnMTAPIRetcode](reference_retcodes.md "Return Codes") enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.