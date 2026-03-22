# Manager Interface (Rest API) (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API")/ Manager Interface (Rest API) | [](webapi_examples.md "Examples") [](webapi_config.md "Configuration Databases") |
| --- | --- | --- |
| --- | --- |

Main Interface (Rest API)
The following commands of manager connection to a trade server are implemented the MetaTrader 5 Web API:
  * [Configuration Databases](webapi_config.md "Configuration Databases")
  * [Trading](webapi_trading.md "Trading")
  * [Users](webapi_users.md "Users")
  * [Clients](webapi_client.md "Clients")
  * [Mail](webapi_mail.md "Mail")
  * [News](webapi_news.md "News")
  * [Prices](webapi_prices.md "Prices")
  * [Daily Reports](webapi_daily.md "Daily Reports")
  * [Settings Files](webapi_setting.md "Settings Files")
  * [Subscriptions](webapi_subscription.md "Subscriptions")
  * [Common Requests](webapi_common_request.md "Common Requests")

The accessibility of information using the manager commands is fully defined by access permissions set for the manager account that is used for [connecting](webapi_rest_authentication.htm#client_start) to the server.  
---  
The main method of working with the Manager interface is sending commands via GET and POST requests (Rest API). The MetaTrader 5 SDK package also includes the [PHP](php.md "Protocol Implementation in PHP") and [.NET](net.md "Protocol Implementation in .NET") implementation examples of this protocol.