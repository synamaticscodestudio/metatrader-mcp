# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Assign | [](imtreportcachekeyset_release.md "Release") [](imtreportcachekeyset_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Assign
Assign a passed object to the current one.
MTAPIRES IMTReportCacheKeySet::Assign( const IMTReportCacheKeySet* keyset // Source object )  
---  
Parameters
keyset
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.