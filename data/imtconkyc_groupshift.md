# GroupShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupShift | [](imtconkyc_groupclear.md "GroupClear") [](imtconkyc_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupShift
Shift a group in the KYC provider settings.
C++
MTAPIRES IMTConKYC::GroupShift( const UINT pos, // Group position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupShift( uint pos, // Group position int  shift // Shift )  
---  
Parameters
pos
[in] Group position in the list, starting from 0.
shift
[in] Shift of a group relative to its current position. A negative value means shift towards the top of the list; a positive value shifts the item towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.