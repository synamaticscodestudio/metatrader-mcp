# ECNRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNRequestByLogins | [](imtadminapi_ecnrequestbygroup.md "ECNRequestByGroup") [](imtadminapi_ecnrequestbytickets.md "ECNRequestByTickets") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNRequestByLogins
Request the [current state of matching](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history) for the specified logins.
C++
MTAPIRES IMTAdminAPI::ECNRequestByLogins( const UINT64* logins, // logins const UINT logins_total, // number of logins IMTECNMatchingArray* matching, // array of matching orders IMTECNFillingArray* filling, // array of filling orders IMTECNProviderArray* providers // array of providers )  
---  
.NET
MTRetCode CIMTAdminAPI.ECNRequestByLogins( ulong[] logins, // logins CIMTECNMatchingArray matching, // array of matching orders CIMTECNFillingArray filling, // array of filling orders CIMTECNProviderArray providers // array of providers )  
---  
Parameters
logins
[in] An array of logins the data is requested for.
logins_total
[in] The number of logins in the 'logins' array.
matching
[out] An object of the [array of matching orders](imtecnmatchingarray.md "IMTECNMatchingArray"). The 'matching' object must be previously created via the [IMTAdminAPI::ECNCreateMatchingArray](imtadminapi_ecncreatematchingarray.md "ECNCreateMatchingArray") method.
filling
[out] An object of the [array of filling orders](imtecnfillingarray.md "IMTECNFillingArray"). The 'filling' object must be previously created via the [IMTAdminAPI::ECNCreateFillingArray](imtadminapi_ecncreatefillingarray.md "ECNCreateFillingArray") method.
providers
[out] An object of the [array of providers](imtecnproviderarray.md "IMTECNProviderArray"). The 'providers' object must be previously created via the [IMTAdminAPI::ECNCreateProvidersArray](imtadminapi_ecncreateproviderarray.md "ECNCreateProviderArray") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).