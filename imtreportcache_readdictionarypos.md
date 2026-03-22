# ReadDictionaryPos (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadDictionaryPos | [](imtreportcache_readmissingkeys.md "ReadMissingKeys") [](imtreportcache_readdictionarystring.md "ReadDictionaryString") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadDictionaryPos
Get the position of a string (value) in the dictionary.
MTAPIRES IMTReportCache::ReadDictionaryPos( const UINT dictionary_id, // Dictionary identifier LPCWSTR string, // String UINT& pos // Position )  
---  
Parameters
dictionary_id
[in] Dictionary identifier.
string
[in] The string the position of which is to be retrieved.
pos
[in] The position of the string in the dictionary.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.