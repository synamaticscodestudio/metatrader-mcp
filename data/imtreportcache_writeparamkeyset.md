# WriteParamKeySet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteParamKeySet | [](imtreportcache_writeparamdata.md "WriteParamData") [](imtreportcache_writevalue.md "WriteValue") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteParamKeySet
Set the value for the ["KeySet" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::WriteParamKeySet( const IMTReportCacheKeySet* keys, // Set of keys const bool merge // Flag for merging changes )  
---  
Parameters
keys
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object which describes keys being added.
merge
[in] Flag for merging changes. If "true", only new keys form the passed set will be added to the parameter. If "false", all the keys in the parameter will be overwritten by the passed ones.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.