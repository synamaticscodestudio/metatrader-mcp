# Name (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ Name | [](imtreportcache_release.md "Release") [](imtreportcache_timelastwrite.md "TimeLastWrite") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::Name
Get the name of the data cache.
LPCWSTR IMTReportCache::Name()  
---  
Return Value
The name of the data cache.
Note
The name is used for accessing the data cache using methods [IMTReportAPI::ReportCacheGet](imtreportapi_reportcacheget.md "ReportCacheGet") and [IMTReportAPI::ReportCacheGetTemporary](imtreportapi_reportcachegettemporary.md "ReportCacheGetTemporary").