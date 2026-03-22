# TimeLastWrite (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ TimeLastWrite | [](imtreportcache_name.md "Name") [](imtreportcache_valuecreate.md "ValueCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::TimeLastWrite
Get the time of the last data cache change.
INT64 IMTReportCache::TimeLastWrite()  
---  
Return Value
The time of the last modification of the data cache, in seconds elapsed since 01.01.1970.
Note
Use this method to determine if data in the cache needs to be updated.