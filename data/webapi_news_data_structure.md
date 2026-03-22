# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ News ](webapi_news.md "News")/ Data Structure | [](webapi_news.md "News") [](webapi_news_send.md "Send News") |
| --- | --- | --- |
| --- | --- |

Data Structure
News messages are passed in the JSON format in response to the [/api/news/get](webapi_news_get.md "Get News Without Body") and [/api/news/get_body](webapi_news_body_request.md "Get News With Body") requests.
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | News ID. |
| Size | Integer | The size of the news body in bytes. |
| Time | Integer | The time of news sending in seconds that have elapsed since 01.01.1970. |
| Language | Integer | News language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (value from Prim.lang.identifier). |
| Category | String | News category. |
| Subject | String | News subject. |
| Body | String | News body in the Base64 format. |