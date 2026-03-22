# Swap (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Swap | [](imtreportcachekeyset_clear.md "Clear") [](imtreportcachekeyset_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Swap
Exchange key sets with the passed object.
MTAPIRES IMTReportCacheKeySet::Swap( IMTReportCacheKeySet* keyset // Set of keys )  
---  
Parameters
keyset
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") objects, keys from which will replace keys in the current object. Keys from the current object will replace keys in the passed object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.