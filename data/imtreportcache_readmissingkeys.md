# ReadMissingKeys (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadMissingKeys | [](imtreportcache_readvalues.md "ReadValues") [](imtreportcache_readdictionarypos.md "ReadDictionaryPos") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadMissingKeys
Get the list of missing keys in cache.
MTAPIRES IMTReportCache::ReadMissingKeys( const IMTReportCacheKeySet* keys, // The set of keys to check IMTReportCacheKeySet* missing_keys // The set of missing keys )  
---  
Parameters
keys
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object which describes the set of keys to be checked in the cache.
missing_keys
[out] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object to which the missing keys are added. The object must be previously created using the [IMTReportAPI::KeySetCreate](imtreportapi_keysetcreate.md "KeySetCreate") method.
Return Value
If the method is successfully executed and missing keys are found, the [MT_RET_OK](retcodes_successful.md "Successful completion") code is returned. If there are no missing keys, [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") is returned.
If the method execution fails, the appropriate error code is returned. For example, if both parameters are NULL, the method returns [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors").
Note
To check if there are any missing keys without retrieving the list of such keys specify the NULL value for the missing_keys parameter.
If you pass the NULL value for the 'keys' parameter, all the keys will be considered missing. In this case all the keys which exist in the cache will be added to the missing_keys parameter.