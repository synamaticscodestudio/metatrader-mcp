# CountryShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryShift | [](imtconkyc_countryclear.md "CountryClear") [](imtconkyc_countrytotal.md "CountryTotal") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryShift
Shift a country in the KYC provider settings.
C++
MTAPIRES IMTConKYC::CountryShift( const UINT pos, // Country position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryShift( uint pos, // Country position int  shift // Shift )  
---  
Parameters
pos
[in] The position of the country in the list, starting from 0.
shift
[in] The shift of the country relative to its current position. A negative value means shift towards the top of the list; a positive value shifts the item towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.