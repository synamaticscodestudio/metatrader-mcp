# ECNRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNRequestByTickets | [](imtadminapi_ecnrequestbylogins.md "ECNRequestByLogins") [](imtadminapi_ecnrequesthistorybygroup.md "ECNRequestHistoryByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNRequestByTickets
Request the [current state of matching](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history) for the specified order tickets.
C++
MTAPIRES IMTAdminAPI::ECNRequestByTickets( const UINT64* tickets, // tickets const UINT tickets_total, // number of tickets IMTECNMatchingArray* matching, // array of matching orders IMTECNFillingArray* filling, // array of filling orders IMTECNProviderArray* providers // array of providers )  
---  
.NET
MTRetCode CIMTAdminAPI.ECNRequestByTickets( ulong[] tickets, // tickets CIMTECNMatchingArray matching, // array of matching orders CIMTECNFillingArray filling, // array of filling orders CIMTECNProviderArray providers // array of providers )  
---  
Parameters
tickets
[in] An array of tickets the data is requested for.
tickets_total
[in] The number of tickets in the 'tickets' array.
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