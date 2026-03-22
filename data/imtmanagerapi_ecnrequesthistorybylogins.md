# ECNRequestHistoryByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNRequestHistoryByLogins | [](imtmanagerapi_ecnrequesthistorybygroup.md "ECNRequestHistoryByGroup") [](imtmanagerapi_ecnrequesthistorybytickets.md "ECNRequestHistoryByTickets") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNRequestByLogins
Request the [matching history](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#history) for the specified logins.
C++
MTAPIRES IMTManagerAPI::ECNRequestByLogins( const UINT64* logins, // logins const UINT logins_total, // the number of logins const INT64 from, // period beginning const INT64 to, // period end IMTECNHistoryMatchingArray* matching, // array of matching orders IMTECNHistoryFillingArray* filling, // array of filling objects IMTECNHistoryDealArray* deals, // array of deals IMTECNProviderArray*  providers  // array of providers )  
---  
.NET
MTRetCode CIMTManagerAPI.ECNRequestByLogins( ulong[] logins, // logins long from, // period beginning long to, // period end CIMTECNMatchingArray matching, // array of matching orders CIMTECNFillingArray filling, // array of filling orders CIMTECNHistoryDealArray deals, // array of deals CIMTECNProviderArray providers // array of providers )  
---  
Parameters
logins
[in] An array of logins the data is requested for.
logins_total
[in] The number of logins in the 'logins' array.
from
[in] The beginning of the period for which you need to get data. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get data. The date is specified in seconds since 01.01.1970.
matching
[out] An object of the [array of matching orders from history](imtecnhistorymatchingarray.md "IMTECNMatchingArray"). The 'matching' object must be previously created via the [IMTAdminAPI::ECNCreateHistoryMatchingArray](imtadminapi_ecncreatehistorymatchingarray.md "ECNCreateHistoryMatchingArray") method.
filling
[out] An object of the [array of filling orders from history](imtecnhistoryfillingarray.md "IMTECNFillingArray"). The 'filling' object must be previously created via the [IMTAdminAPI::ECNCreateHistoryFillingArray](imtadminapi_ecncreatehistoryfillingarray.md "ECNCreateHistoryFillingArray") method.
deals
[out] An object of the [array of deals from history](imtecnhistorydealarray.md "IMTECNMatchingArray"). The 'deals' object must be previously created via the [IMTAdminAPI::ECNCreateHistoryDealArray](imtadminapi_ecncreatehistorydealarray.md "ECNCreateHistoryDealArray") method.
providers
[out] An object of the [array of providers](imtecnproviderarray.md "IMTECNProviderArray"). The 'providers' object must be previously created via the [IMTAdminAPI::ECNCreateProvidersArray](imtadminapi_ecncreateproviderarray.md "ECNCreateProviderArray") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).