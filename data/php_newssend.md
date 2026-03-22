# NewsSend (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ News Event ](php_news.md "News Event")/ NewsSend | [](php_news.md "News Event") [](php_tick.md "Prices") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::NewsSend
Send news via the internal news system of the platform.
MTAPIRES MTWebAPI::NewsSend( string $subject, // Subject string $category, // Category int $language, // News language int $priority, // Priority string $text // News text )  
---  
Parameters
$subject
[in] News subject.
$category
[in] News category. To specify a subcategory use a backlash "\". For example, "Economy\World".
$language
[in] News language in the LANGID format used in[MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier). The zero value means that the news has no language binding.
$priority
[in] Priority news. 0 — normal news, 1 — high-priority.
$text
[in] News body. You may use HTML to format news.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The strings specifying the subject, the category and the text must be passed in the UTF-8 format.